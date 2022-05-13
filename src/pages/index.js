import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import Seo from "../components/seo";

const Grid = styled.div`
  display: grid;
  justify-items: stretch;
  gap: 10px;
  margin-bottom: 2.5em;

  &.col-2 {
    grid-template-columns: 1fr 1fr;
    @media (max-width: 991.98px) {
      grid-template-columns: 1fr;
    }
  }
  &.col-3 {
    grid-template-columns: 1fr 1fr 1fr;
    @media (max-width: 991.98px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 767.98px) {
      grid-template-columns: 1fr;
    }
  }
`;

const Card = styled.div`
  padding: 0.5em 1em;
  border: 1px solid rgb(225, 225, 225);
`;

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <main>
      <h1>
        Welcome to the Private Cloud Platform as a Service Technical
        Documentation
      </h1>
      <Grid className="col-2">
        <Card>
          <h2>Get Started</h2>
          <p>
            Start here for the first steps on working in our OpenShift
            environment.
          </p>
          <ul>
            <li>
              <Link to={"/provision-new-openshift-project"}>
                Provision a new project in OpenShift
              </Link>
            </li>
            <li>
              <Link to={"/grant-user-access-openshift"}>
                User access in OpenShift
              </Link>
            </li>
            <li>
              <Link to={"/openshift-project-resource-quotas"}>
                Project resource quotas
              </Link>
            </li>
          </ul>
        </Card>
        <Card>
          <h2>Build, Deploy and Maintain Apps</h2>
          <p>Best practices on the platform.</p>
          <ul>
            <li>Build an application (coming soon)</li>
            <li>Deploy an application (coming soon)</li>
            <li>Monitor an application (coming soon)</li>
            <li>Retire an application (coming soon)</li>
          </ul>
        </Card>
      </Grid>
      <h2>Training and Learning</h2>
      <Grid className="col-3">
        <Card>
          <h3>OpenShift 101</h3>
          <p>
            This training covers several technical topics, and provides an
            overview of the build and deploy processes for cloud-native
            applications on OpenShift.
          </p>
          <p>Register for OpenShift 101. (coming soon)</p>
        </Card>
        <Card>
          <h3>Rocket.Chat</h3>
          <p>
            Rocket.Chat will be your main communication channel for platform
            updates and support while you work in the BC Gov Private Cloud PaaS.
            Read about{" "}
            <a href="https://platform-services-dev.apps.silver.devops.gov.bc.ca/support-and-community/stay-connected/">
              how to stay connected in Rocket.Chat
            </a>
            .
          </p>
          <p>
            <a href="htttps://chat.developer.gov.bc.ca">
              Log in to Rocket.Chat
            </a>
            .
          </p>
        </Card>
        <Card>
          <h3>Platform community MeetUps</h3>
          <p>
            Every month, we host a platform community MeetUp where product teams
            from across the B.C. government give technical demos of their
            application.
          </p>
          <p>
            <a href="https://platform-services-dev.apps.silver.devops.gov.bc.ca/support-and-community/events-in-the-bc-gov-private-cloud-paas/">
              Learn how to register for this and other events
            </a>
            .
          </p>
        </Card>
      </Grid>
      <h2>Dive deeper</h2>
      <Grid className="col-3">
        <Card>
          <h3>Security and privacy compliance</h3>
          <ul>
            <li>STRA and PIA for Private Cloud Platform (coming soon)</li>
            <li>Vault Secret Managment Service (coming soon)</li>
            <li>Artifactory Trusted Repository Service (coming soon)</li>
            <li>Security best practices for apps (coming soon)</li>
          </ul>
        </Card>
        <Card>
          <h3>Use GitHub in BC Gov</h3>
          <ul>
            <li>
              <Link to={"/bc-government-organizations-in-github"}>
                BC Government Organizations in Github
              </Link>
            </li>
            <li>
              <Link to={"/request-bcgov-github-access-repository-creation"}>
                Request access to BCGov org in GitHub
              </Link>
            </li>
            <li>Best practices for working in GitHub (coming soon)</li>
          </ul>
        </Card>
        <Card>
          <h3>Automation and resiliency</h3>
          <ul>
            <li>
              <Link to={"/app-resiliency-guidelines"}>
                App resiliency guidelines
              </Link>
            </li>
            <li>CI/CD Pipeline automation (coming soon)</li>
          </ul>
        </Card>
        <Card>
          <h3>App Monitoring</h3>
          <ul>
            <li>
              <Link to={"/sysdig-monitor-setup-team"}>
                Set up a team in Sysdig Monitor
              </Link>
            </li>
            <li>
              <Link to={"/sysdig-monitor-set-up-advanced-functions"}>
                Set up advance functions in Sysdig Monitor
              </Link>
            </li>
            <li>Four gold signals for app monitoring (coming soon)</li>
            <li>App Logging (coming soon)</li>
          </ul>
        </Card>
        <Card>
          <h3>Database and API management</h3>
          <ul>
            <li>Open source database technologies (coming soon)</li>
            <li>High availability database clusters (coming soon)</li>
            <li>API guidelines (coming soon)</li>
          </ul>
        </Card>
        <Card>
          <h3>Reusable code and services</h3>
          <ul>
            <li>KeyCloak SSO (coming soon)</li>
            <li>
              <Link to={"/reusable-services-list"}>Reusable services list</Link>
            </li>
            <li>Project examples (coming soon)</li>
          </ul>
        </Card>
        <Card>
          <h3>Platform architecture reference</h3>
          <ul>
            <li>Platform storage (coming soon)</li>
            <li>Platform architecture (coming soon)</li>
          </ul>
        </Card>
        <Card>
          <h3>Troubleshooting</h3>
          <ul>
            <li>Database issues (coming soon)</li>
            <li>Application issues (coming soon)</li>
            <li>Network connectivity issues (coming soon)</li>
          </ul>
        </Card>
      </Grid>
      <h2>Get support on the platform</h2>
      <Grid className="col-3">
        <Card>
          <h3>Report a Platform Incident</h3>
          <p>
            If you think an incident has occurred with our services, you can
            report it by{" "}
            <a href="https://platform-services-dev.apps.silver.devops.gov.bc.ca/support-and-community/support-incident-response-flow/">
              following these steps
            </a>
            .
          </p>
        </Card>
        <Card>
          <h3>Get Help or Support</h3>
          <p>
            We follow a community-based support model. You can use our
            self-serve resources or ask for help from the platform community.{" "}
            <a href="https://platform-services-dev.apps.silver.devops.gov.bc.ca/support-and-community/how-to-get-support-or-help/">
              Learn how to get help on the Platform
            </a>
            .
          </p>
        </Card>
        <Card>
          <h3>DevOps Requests</h3>
          <p>
            Not sure where to go to get things done on the platform? We've
            outlined common platform tasks and links to additional instructions.{" "}
            <a href="https://platform-services-dev.apps.silver.devops.gov.bc.ca/support-and-community/devops-requests-in-the-bc-gov-private-cloud-paas/">
              Learn how to get help with some of the most commonly searched-for
              tasks
            </a>
            .
          </p>
        </Card>
      </Grid>
    </main>
  </Layout>
);

export default IndexPage;
