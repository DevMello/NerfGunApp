import { useLayoutEffect, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Page,
  List,
  Navbar,
  BlockTitle,
  ListItem,
  Radio,
  Toggle,
  Toolbar,
  Block,
  Notification,
  Progressbar,
  Stepper,
  Dialog,
  DialogButton  
} from "konsta/react";

interface Props {
  onTheme: (theme: "ios" | "material") => void;
  theme: "ios" | "material";
}

export function Home(props: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const [ammoCount, setAmmoCount] = useState(100); // Initial ammo count
  const [batteryPercentage, setBatteryPercentage] = useState(0.6);
  const [notificationFull, setNotificationFull] = useState(false);
  const [value, setValue] = useState("25"); // Ensure initial state is a string
  const [inputValue, setInputValue] = useState("25"); // Ensure initial state is a string

  const increase = () => {
    setValue((prevValue) => String(Number(prevValue) + 1)); // Convert to number, increment, and convert back to string
  };

  const decrease = () => {
    setValue((prevValue) => String(Math.max(Number(prevValue) - 1, 0))); // Convert to number, decrement, ensure >= 0, and convert back to string
  };

  const increaseInput = () => {
    const v = parseInt(inputValue, 10);
    if (!isNaN(v)) setInputValue(String(v + 1)); // Convert to number, increment, and convert back to string
  };

  const decreaseInput = () => {
    const v = parseInt(inputValue, 10);
    if (!isNaN(v)) setInputValue(String(Math.max(v - 1, 0))); // Convert to number, decrement, ensure >= 0, and convert back to string
  };

  const onInputChange = (e) => {
    setInputValue(e.target.value); // Update input value directly
  };

  const onInputBlur = () => {
    const v = parseInt(inputValue, 10);
    if (isNaN(v)) setInputValue("0"); // If input value is not a number, set it to "0"
  };
  

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  useLayoutEffect(() => {
    
    setDarkMode(document.documentElement.classList.contains("dark"));
  });

  //toggleDarkMode();
  return (
    <Page>
    <Notification
        opened={notificationFull}
        title="Rapid Strike"
        titleRightText="Sucessful"
        subtitle="You are now connected to RapidStrike."
        text="The Connection to RapidStrike has been sucessful."
      />
      <Navbar title="RapidStrike - Connected" large transparent centerTitle />
      
      <Toolbar
  top={false}
  className={`left-0 bottom-0 fixed w-full flex justify-between px-15`}
>
  <Link to="/">Home</Link>
  <Link to="/view">Settings</Link>
  <Link to="/config">Configurator</Link>
</Toolbar>

      
      <div
        
      >
        <BlockTitle>Ammo</BlockTitle>
        
        <div style={{ fontSize: "60px", fontWeight: "bold", textAlign: "center"
         }}>
          {ammoCount}
        </div>
      </div>
      <BlockTitle>Battery Level: {batteryPercentage* 100}%</BlockTitle>
      <Block strong insetMaterial outlineIos>
        <div className="my-4">
          <Progressbar progress={batteryPercentage} />
        </div>
      </Block>

      <BlockTitle>Set Magazine Size</BlockTitle>
      <Block strongIos outlineIos className="text-center space-y-4">
      <div>
            <Stepper
              value={value}
              outline
              rounded
              onPlus={increase}
              onMinus={decrease}
            />
      </div>
      </Block>

      <BlockTitle>Theme</BlockTitle>
      <List strong inset>
        <Link to="/view">
          <ListItem title="Navigate" label link />
        </Link>
      </List>

      
      <List strong inset>
        <ListItem
          label
          title="iOS Theme"
          media={
            <Radio
              onChange={() => props.onTheme("ios")}
              checked={props.theme === "ios"}
              component="div"
            />
          }
        />

        <ListItem
          label
          title="Material Theme"
          media={
            <Radio
              onChange={() => props.onTheme("material")}
              checked={props.theme === "material"}
              component="div"
            />
          }
        />
      </List>

      <List strong inset>
        <ListItem
          title="Dark Mode"
          label
          after={
            <Toggle
              onChange={toggleDarkMode}
              checked={darkMode}
              component="div"
            />
          }
        />
      </List>

    </Page>
  );
}
