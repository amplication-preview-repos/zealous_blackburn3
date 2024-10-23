import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { ClaimPredictionList } from "./claimPrediction/ClaimPredictionList";
import { ClaimPredictionCreate } from "./claimPrediction/ClaimPredictionCreate";
import { ClaimPredictionEdit } from "./claimPrediction/ClaimPredictionEdit";
import { ClaimPredictionShow } from "./claimPrediction/ClaimPredictionShow";
import { MedicalRecordList } from "./medicalRecord/MedicalRecordList";
import { MedicalRecordCreate } from "./medicalRecord/MedicalRecordCreate";
import { MedicalRecordEdit } from "./medicalRecord/MedicalRecordEdit";
import { MedicalRecordShow } from "./medicalRecord/MedicalRecordShow";
import { PatientList } from "./patient/PatientList";
import { PatientCreate } from "./patient/PatientCreate";
import { PatientEdit } from "./patient/PatientEdit";
import { PatientShow } from "./patient/PatientShow";
import { DoctorList } from "./doctor/DoctorList";
import { DoctorCreate } from "./doctor/DoctorCreate";
import { DoctorEdit } from "./doctor/DoctorEdit";
import { DoctorShow } from "./doctor/DoctorShow";
import { DiseaseAnalysisList } from "./diseaseAnalysis/DiseaseAnalysisList";
import { DiseaseAnalysisCreate } from "./diseaseAnalysis/DiseaseAnalysisCreate";
import { DiseaseAnalysisEdit } from "./diseaseAnalysis/DiseaseAnalysisEdit";
import { DiseaseAnalysisShow } from "./diseaseAnalysis/DiseaseAnalysisShow";
import { BillingAgentList } from "./billingAgent/BillingAgentList";
import { BillingAgentCreate } from "./billingAgent/BillingAgentCreate";
import { BillingAgentEdit } from "./billingAgent/BillingAgentEdit";
import { BillingAgentShow } from "./billingAgent/BillingAgentShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"MedicalService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="ClaimPrediction"
          list={ClaimPredictionList}
          edit={ClaimPredictionEdit}
          create={ClaimPredictionCreate}
          show={ClaimPredictionShow}
        />
        <Resource
          name="MedicalRecord"
          list={MedicalRecordList}
          edit={MedicalRecordEdit}
          create={MedicalRecordCreate}
          show={MedicalRecordShow}
        />
        <Resource
          name="Patient"
          list={PatientList}
          edit={PatientEdit}
          create={PatientCreate}
          show={PatientShow}
        />
        <Resource
          name="Doctor"
          list={DoctorList}
          edit={DoctorEdit}
          create={DoctorCreate}
          show={DoctorShow}
        />
        <Resource
          name="DiseaseAnalysis"
          list={DiseaseAnalysisList}
          edit={DiseaseAnalysisEdit}
          create={DiseaseAnalysisCreate}
          show={DiseaseAnalysisShow}
        />
        <Resource
          name="BillingAgent"
          list={BillingAgentList}
          edit={BillingAgentEdit}
          create={BillingAgentCreate}
          show={BillingAgentShow}
        />
      </Admin>
    </div>
  );
};

export default App;
