// GlobalVariables.js

export const BASE_URL = "http://172.20.10.6:8000";

export let competitionsData = [];

export let selectedCompetitionId = null;

export const updateCompetitionsData = (data) => {
    competitionsData = data;
  };

  export const updateSelectedCompetitionId = (id) => {
    selectedCompetitionId = id;
  };

  