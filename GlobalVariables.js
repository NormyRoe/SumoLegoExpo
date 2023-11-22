// GlobalVariables.js

export const BASE_URL = "http://172.20.10.6:8000";

export let competitionsData = [];

export let selectedCompetitionId = () => {

  return selectedCompetitionId;
};

export let divisionsData = [];

export let selectedDivisionId = () => {

  return selectedDivisionId;
};

export let usersData = [];

export let selectedUserId = () => {

  return selectedUserId;
};

export let fieldsData = [];

export let selectedFieldId = () => {

  return selectedFieldId;
};

export let schoolsData = [];

export let selectedSchoolId = () => {

  return selectedSchoolId;
};

export let teamsData = [];

export let selectedTeamId = () => {

  return selectedTeamId;
};

export let gameResultsData = [];

export let selectedGameResultId = () => {

  return selectedGameResultId;
};

export let accessRole = null;

export let roundsData = [];


export const updateCompetitionsData = (data) => {
    competitionsData = data;
  };

export const updateSelectedCompetitionId = (id) => {
    selectedCompetitionId = id;
  };


export const updateDivisionsData = (data) => {
    divisionsData = data;
  };

export const updateSelectedDivisionId = (id) => {
    selectedDivisionId = id;
  };


export const updateUsersData = (data) => {
    usersData = data;
  };

export const updateSelectedUserId = (id) => {
    selectedUserId = id;
  };


export const updateFieldsData = (data) => {
    fieldsData = data;
  };

export const updateSelectedFieldId = (id) => {
    selectedFieldId = id;
  };


export const updateSchoolsData = (data) => {
    schoolsData = data;
  };

export const updateSelectedSchoolId = (id) => {
    selectedSchoolId = id;
  };


export const updateTeamsData = (data) => {
    teamsData = data;
  };

export const updateSelectedTeamId = (id) => {
    selectedTeamId = id;
  };


export const updateGameResultsData = (data) => {
    gameResultsData = data;
  };

export const updateSelectedGameResultId = (id) => {
    selectedGameResultId = id;
  };
  
export const updateAccessRole = (access_role) => {
    accessRole = access_role;
  };

  export const updateRoundsData = (data) => {
    roundsData = data;
  };