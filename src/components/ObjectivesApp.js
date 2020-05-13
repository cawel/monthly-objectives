import React, { Fragment, useState } from "react";
import { useListVals } from "react-firebase-hooks/database";
import PropTypes from "prop-types";

import { ObjectiveList } from "./objectives/ObjectiveList";
import { ObjectiveAdd } from "./objectives/ObjectiveAdd";
import MonthSelector from "./MonthSelector";
import { Footer } from "./Footer";
import Login from "./Login";
import { db } from "../base";
import {
  getMonth,
  parseDate,
  getCurrentMonth,
  getCurrentYear,
  isLoggedIn,
} from "../helpers";

const DEBUG_MODE = false;

const yearFromParams = (params) => params.year || getCurrentYear();

const monthFromParams = (params) => params.month || defaultMonth();

const defaultMonth = () => getCurrentMonth().toLowerCase();

const documentKey = (params) =>
  `${yearFromParams(params)}/${monthFromParams(params)}`;

// Component
export const ObjectivesApp = (props) => {
  const [year, setYear] = useState(getCurrentYear());
  const [monthAsString, setMonthAsString] = useState(defaultMonth());
  const { params } = props.match;

  const [objectives, loading, error] = useListVals(db(documentKey(params)));

  const addObjective = (obj) => {
    const oldObjectives = Object.assign([], objectives);
    oldObjectives.push(obj);
    db(documentKey(params)).set(oldObjectives);
  };

  const removeObjective = (index) => {
    const oldObjectives = Object.assign([], objectives);
    oldObjectives.splice(index, 1);
    db(documentKey(params)).set(oldObjectives);
  };

  const updateMonth = (date) => {
    const monthAsString = getMonth(date).toLowerCase();
    const year = date.getFullYear();
    setMonthAsString(monthAsString);
    setYear(year);
    props.history.push(`/${date.getFullYear()}/${monthAsString}`);
  };

  const prevMonth = (event) => {
    event.preventDefault();
    const date = parseDate(monthAsString, year);
    const newMonth = date.getMonth() - 1;
    date.setMonth(newMonth);
    updateMonth(date);
  };

  const nextMonth = (event) => {
    event.preventDefault();
    const date = parseDate(monthAsString, year);
    const newMonth = date.getMonth() + 1;
    date.setMonth(newMonth);
    updateMonth(date);
  };

  const toggleObjectiveCheck = (objectiveIndex) => {
    const oldObjectives = Object.assign([], objectives);
    oldObjectives[objectiveIndex].checked = !oldObjectives[objectiveIndex]
      .checked;
    db(params).set(oldObjectives);
  };

  const showError = () => error && objectives === undefined;

  if (!isLoggedIn()) {
    return (
      <Fragment>
        <Login history={props.history} />
        <Footer />
      </Fragment>
    );
  }

  return (
    <Fragment>
      <MonthSelector
        month={monthAsString}
        year={String(year)}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
      />

      {DEBUG_MODE && <div>Data: {JSON.stringify(objectives, null, 2)}</div>}
      {showError() && <div>Error: {JSON.stringify(error, null, 2)}</div>}
      {loading && (
        <span>
          <i className="fas fa-spinner" />
          Loading...
        </span>
      )}

      <ObjectiveList
        // firebase returns `undefined` when no data is found
        objectives={objectives ?? []}
        toggleObjectiveCheck={toggleObjectiveCheck}
        removeObjective={removeObjective}
      />
      <ObjectiveAdd addObjective={addObjective} />
      <Footer history={props.history} />
    </Fragment>
  );
};

ObjectivesApp.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
};
