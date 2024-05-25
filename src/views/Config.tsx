import { Block, BlockTitle, Navbar, NavbarBackLink, Page, List, ListItem, BlockHeader, Range, Toolbar, Segmented, SegmentedButton } from "konsta/react";
import { useNavigate, Link } from "react-router-dom";
import React, { useState } from 'react';

export function Config() {
    const navigate = useNavigate();
    const [price, setPrice] = useState(50);
    const [shootingMode, setShootingMode] = useState(1); // 1: Single Shot, 2: Burst, 3: Full Auto
    const [shootingSpeed, setShootingSpeed] = useState(2); // Default shooting speed
    const shootingSpeedVisible = shootingMode !== 1; // Show shooting speed if not in Single Shot mode
  
    const handleShootingModeChange = (mode) => {
      setShootingMode(mode);
      
      if (mode === 1) {
        setShootingSpeed(2);
      }
    };

   
    return (
      <Page>
        <Navbar
          title="Config"
          left={<NavbarBackLink onClick={() => history.back()} />}
        />
        <Toolbar  top={false}  className={`left-0 bottom-0 fixed w-full flex justify-between px-15`}>
          <Link to="/">Home</Link>
          <Link to="/view">Settings</Link>
          <Link to="/config">Configurator</Link>
        </Toolbar>
  
        <BlockTitle>Gun Configurator</BlockTitle>
        <Block strong inset className="space-y-4">
          <p>The Config page for your nerf gun. It shows all the information such as the type of mode, power settings, etc.</p>
        </Block>
        <BlockTitle>Power Level: {price}%</BlockTitle>
        <BlockHeader>Change how fast the motors shoot.</BlockHeader>
        <List strong insetMaterial outlineIos>
          <ListItem
            innerClassName="flex space-x-4 rtl:space-x-reverse"
            innerChildren={
              <>
                <span>0%</span>
                <Range
                  value={price}
                  step={1}
                  min={0}
                  max={100}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <span>100%</span>
              </>
            }
          />
        </List>
  
        <BlockTitle>Shooting Mode</BlockTitle>
        <Block strongIos outlineIos className="space-y-4">
          <Segmented rounded>
            <SegmentedButton
              active={shootingMode === 1}
              onClick={() => handleShootingModeChange(1)}
            >
              Single Shot
            </SegmentedButton>
            <SegmentedButton
              active={shootingMode === 2}
              onClick={() => handleShootingModeChange(2)}
            >
              Burst
            </SegmentedButton>
            <SegmentedButton
              active={shootingMode === 3}
              onClick={() => handleShootingModeChange(3)}
            >
              Full Auto
            </SegmentedButton>
          </Segmented>
        </Block>
  
        {shootingSpeedVisible && (
          <>
            <BlockTitle>Shooting Speed</BlockTitle>
            <Block strongIos outlineIos className="space-y-4">
              <Segmented rounded>
                <SegmentedButton
                  active={shootingSpeed === 1}
                  onClick={() => setShootingSpeed(1)}
                >
                  Slow
                </SegmentedButton>
                <SegmentedButton
                  active={shootingSpeed === 2}
                  onClick={() => setShootingSpeed(2)}
                >
                  Medium
                </SegmentedButton>
                <SegmentedButton
                  active={shootingSpeed === 3}
                  onClick={() => setShootingSpeed(3)}
                >
                  Fast
                </SegmentedButton>
              </Segmented>
            </Block>
          </>
        )}
      </Page>
    );
  }