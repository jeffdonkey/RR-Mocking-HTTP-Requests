import { enableFetchMocks } from 'jest-fetch-mock'
import App from './App'
import {render, screen, waitFor} from '@testing-library/react'
enableFetchMocks()


beforeEach(() => {
    // sets everything back to initial state before each test
    fetch.resetMocks();
  })

describe('test Github API', () => {
    test("receives GitHub name from GitHub REST API using jest fetch mock", async () => {    
        fetch.mockResponseOnce(JSON.stringify({ name: 'Jeffrey Heller' }))
        render(<App />)
        const gitHubName = await waitFor(() => screen.getByRole('heading', { level: 2 }))
        expect(gitHubName).toHaveTextContent('Jeffrey Heller')
      })
    test("test for receiving GitHub URL", async () => {
    fetch.mockResponseOnce(JSON.stringify({html_url: 'https://github.com/jeffdonkey'}))
    render(<App />)
    const gitHubURL = await waitFor(() => screen.getByRole('link'))
    expect(gitHubURL).toHaveAttribute('href', expect.stringContaining('github.com'))
    })
})

