import React, { useEffect, useRef, useState } from "react";
import PageHeader from "../components/PageHeader";
import Page from "./Page";
import ILScrollBody from "../components/core/ILScrollBody";

function Events() {
  return (
    <Page>
      <PageHeader title="Events" />
      This is a page this is a page this is a page this is a page. this is a
      page. this is a new page.
      <div className="p-8">
        <ILScrollBody>
          Working meeting: It can be in a design thinking workshop with many
          people or one-on-one with a developer, product manager, or designer.
          This type of meeting can save a lot of time since different people
          have different perspectives, so we can help solve issues more quickly.
          Explaining Meeting: If you need a team member to explain something,
          for example, when you need to design a new feature and don’t know
          about this zone in the product, then you can meet with the product
          manager to get more information. Agreement/decision meeting: Let’s say
          you designed a solution, so you want to show it to the team to get an
          agreement before sending it to development. This type of meeting is
          essential because many people can discuss something and bring it to a
          decision in one hour or less. Meetings like this can involve 3,4,5,6
          and more people, so they’re difficult to manage.
        </ILScrollBody>
      </div>
    </Page>
  );
}

export default Events;
