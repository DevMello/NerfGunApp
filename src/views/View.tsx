import { Block, BlockTitle, Navbar, NavbarBackLink, Page, List, ListItem, Toolbar } from "konsta/react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export function View() {
  const navigate = useNavigate();

  return (
    <Page>
      
      <Navbar
        title="Settings"
        left={<NavbarBackLink onClick={() => navigate("/")} />}
      />
 <Toolbar
  top={false}
  className={`left-0 bottom-0 fixed w-full flex justify-between px-15`}
>
  <Link to="/">Home</Link>
  <Link to="/view">Settings</Link>
  <Link to="/config">Configurator</Link>
</Toolbar>
      <BlockTitle>Settings</BlockTitle>

      <Block strong inset className="space-y-4">
        <p>
          The Settings page for your nerf gun. It shows all the information such as the battery level, the number of darts left, and the current mode. There is also important information like serial number, build number, software version, and last udpate.
        </p>
      </Block>
      <BlockTitle>Gun Information</BlockTitle>
      <Block strong inset>
        <List>
          <ListItem
            title="Manufactured Information"
            
          >
            <ul className="ps-12">
              <ListItem
                title="Serial Number"
                after="ABC123"
                footer="This is the serial number of your device."
                />
              <ListItem
                title="Build Number"
                after="12345"
                footer="This is the build number of the application."
              />
              <ListItem
                title="Software Version"
                after="1.0.0"
                footer="This is the software version of the application."
              />
            </ul>

          </ListItem>
          <ListItem
            title="Battery Level"
            after="100%"
            footer="This is the battery level of the gun."
          />
          <ListItem
            title="Darts Left"
            after="10"
            footer="This is the number of darts left in the gun."
          />
          <ListItem
            title="Mode"
            after="Single"
            footer="This is the current mode of the gun."
          />
        <ListItem
          title="Build Number"
          after="12345"
          footer="This is the build number of the application."
        />
        <ListItem
          title="Serial Number"
          after="ABC123"
          footer="This is the serial number of your device."
        />
        <ListItem
          title="Last Update"
          after="2024-05-14"
          footer="This is the date of the last update of the application."
        />
      </List>
      </Block>

      <BlockTitle>Settings</BlockTitle>
      
    </Page>
  );
}
