import { Container } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import UsersTable from "./UsersTable";

function TabsContent() {
  return (
    <Container>
      <Tabs
        defaultActiveKey="users"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="users" title="Users">
          <UsersTable />
        </Tab>
        <Tab eventKey="blog" title="Blog">
          Tab content for Profile
        </Tab>
      </Tabs>
    </Container>
  );
}

export default TabsContent;
