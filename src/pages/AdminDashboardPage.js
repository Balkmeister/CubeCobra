import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardHeader, CardBody } from 'reactstrap';

import DynamicFlash from 'components/DynamicFlash';
import ButtonLink from 'components/ButtonLink';
import MainLayout from 'layouts/MainLayout';
import RenderToRoot from 'utils/RenderToRoot';

const AdminDashboardPage = ({
  user,
  loginCallback,
  commentReportCount,
  applicationCount,
  articlesInReview,
  videosInReview,
}) => (
  <MainLayout loginCallback={loginCallback} user={user}>
    <DynamicFlash />
    <Card className="my-3 mx-4">
      <CardHeader>
        <h5>Admin Dashboard</h5>
      </CardHeader>
      <CardBody>
        <ButtonLink href="/admin/commentreports" block outline color="success">
          {`Comment Reports (${commentReportCount})`}
        </ButtonLink>
        <ButtonLink href="/admin/applications" block outline color="success">
          {`Content Creator Applications (${applicationCount})`}
        </ButtonLink>
        <ButtonLink href="/admin/comments" block outline color="success">
          Recent Comments
        </ButtonLink>
        <ButtonLink href="/admin/reviewarticles" block outline color="success">
          {`Review Articles (${articlesInReview})`}
        </ButtonLink>
        <ButtonLink href="/admin/reviewvideos" block outline color="success">
          {`Review Videos (${videosInReview})`}
        </ButtonLink>
      </CardBody>
    </Card>
  </MainLayout>
);

AdminDashboardPage.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    notifications: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  }),
  loginCallback: PropTypes.string,
  commentReportCount: PropTypes.number.isRequired,
  applicationCount: PropTypes.number.isRequired,
  articlesInReview: PropTypes.number.isRequired,
  videosInReview: PropTypes.number.isRequired,
};

AdminDashboardPage.defaultProps = {
  user: null,
  loginCallback: '/',
};

export default RenderToRoot(AdminDashboardPage);
