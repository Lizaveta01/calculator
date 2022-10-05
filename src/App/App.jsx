import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

import { HOME_PAGE_ROUTE, SETTINGS_PAGE_ROUTE } from '@/constants'
import { Card } from '@/App/App.styled'
import Loader from '@/components/Loader'
import Header from '@/components/Header/Header'
import HomePage from '@/pages/Home/HomePage'
import SettingsPage from '@/pages/Settings/SettingsPage'
import { PageLayout } from '@/layouts'

export default () => (
  <Suspense fallback={<Loader />}>
    <PageLayout>
      <Card>
        <Header />
          <Switch>
            <Route exact path={HOME_PAGE_ROUTE}
component={HomePage} />
            <Route path={SETTINGS_PAGE_ROUTE} component={SettingsPage} />
          </Switch>
      </Card>
    </PageLayout>
  </Suspense>
)
