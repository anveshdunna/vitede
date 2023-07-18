import React from "react";
import PageHeader from "../components/PageHeader";
import Page from "./Page";
import ILButton from "../components/core/ILButton";

function Approvals() {
  return (
    <Page>
      <PageHeader title="Approvals" />
      <div className="flex items-center p-8">
        <div className="flex flex-col gap-3">
          <ILButton variant="primary">Save</ILButton>
          <ILButton variant="secondary">Save</ILButton>
          <ILButton variant="critical">Save</ILButton>
        </div>
      </div>
    </Page>
  );
}

export default Approvals;
