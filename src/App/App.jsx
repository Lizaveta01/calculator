import React, { Suspense , Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import {
  HOME_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,HOME_PAGE_HISTORY_ROUTE,
} from '@/constants'
import { Card } from '@/App/App.styled'
import Loader from '@/components/Loader'
import Header from '@/components/Header/Header'
import HomePage from '@/pages/Home/HomePage'
import History from '@/components/History/History'
import SettingsPage from '@/pages/Settings/SettingsPage'
import { PageLayout } from '@/layouts'
import { connect } from 'react-redux'
class App extends Component {
  render() {

    const { theme } = this.props

    return (
      <ThemeProvider theme={theme}>
        <Suspense fallback={<Loader />}>
          <PageLayout>
            <Card>
              <Header />
              <Switch>
                <Route
                  exact
                  path={HOME_PAGE_ROUTE}
                  component={HomePage}
                />
                <Route
                  path={SETTINGS_PAGE_ROUTE}
                  component={SettingsPage}
                />
                <Route
                  path={HOME_PAGE_HISTORY_ROUTE}
                  component={History}
                />
              </Switch>
            </Card>
          </PageLayout>
        </Suspense>
      </ThemeProvider>
    )
  }
}
const mapStateToProps = state => {
  return {
    theme: state.theme,
  }
}

export default connect(mapStateToProps)(App)
