import React from "react";
import Header from "next/head";
import { PageComponent } from "../../types/PageComponent";
import { WaitForWsAndAuth } from "../auth/WaitForWsAndAuth";
import { DesktopLayout } from "../layouts/DesktopLayout";
import { LeftPanel, MiddlePanel, RightPanel } from "../layouts/GridPanels";
import { FeedController } from "./FeedController";
import { FollowingOnlineController } from "./FollowingOnlineController";
import { ProfileBlockController } from "./ProfileBlockController";
import { HeaderController } from "../display/HeaderController";

interface LoungePageProps {}

export const DashboardPage: PageComponent<LoungePageProps> = ({}) => {
  return (
    <WaitForWsAndAuth>
      <HeaderController embed={{}} />
      <DesktopLayout>
        <LeftPanel>
          <FollowingOnlineController />
        </LeftPanel>
        <FeedController />
        <RightPanel>
          <ProfileBlockController />
        </RightPanel>
      </DesktopLayout>
    </WaitForWsAndAuth>
  );
};

DashboardPage.ws = true;
