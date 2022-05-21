import React from 'react';
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from 'carbon-components-react';
import {
  AppSwitcher20,
  Notification20,
  UserAvatar20,
} from '@carbon/icons-react';
import { Link } from 'react-router-dom';
import { link } from 'fs';
import { PropTypes } from 'carbon-components-react/lib/components/ListBox';
import styledComponents from 'styled-components';

const UserIconStyled = styledComponents.img`
  border-radius: 50%;
`;

const TutorialHeader = ({ user }) => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <>
        <Header aria-label="Carbon Tutorial">
          <SkipToContent />
          <HeaderMenuButton
            aria-label="Open menu"
            onClick={onClickSideNavExpand}
            isActive={isSideNavExpanded}
          />
          <HeaderName element={Link} to="/" prefix="Intern Diary" />
          <HeaderNavigation aria-label="Carbon Tutorial">
            {/* <HeaderMenuItem element={link} to="/repos">
              Repositories
            </HeaderMenuItem> */}
          </HeaderNavigation>
          <SideNav
            aria-label="Side navigation"
            expanded={isSideNavExpanded}
            isPersistent={false}
          >
            <SideNavItems>
              <HeaderSideNavItems>
                <HeaderMenuItem href="/entries">Entries</HeaderMenuItem>
                <HeaderMenuItem href="/questions">
                  Submit a New Report
                </HeaderMenuItem>
              </HeaderSideNavItems>
            </SideNavItems>
          </SideNav>
          {/* <HeaderGlobalBar /> */}
          <HeaderGlobalBar>
            {user && (
              <HeaderGlobalAction aria-label="User Avatar">
                {user.photoURL ? (
                  <UserIconStyled src={user.photoURL} width="20" alt="user" />
                ) : (
                  <UserAvatar20 />
                )}
              </HeaderGlobalAction>
            )}
          </HeaderGlobalBar>
        </Header>
      </>
    )}
  />
);

TutorialHeader.propTypes = {
  user: PropTypes.object,
};

export default TutorialHeader;
