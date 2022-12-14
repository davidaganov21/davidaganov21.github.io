import { useHttp } from "../hooks/http.hook"
import { RepoProps } from "../interfaces"

const useGithubService = () => {
  const { loading, request, error, clearError } = useHttp()

  const _apiBase = "https://api.github.com/users/davidaganov21"

  const getRepos = async () => {
    const res = await request(`${_apiBase}/repos`)
    return _transformProjects(res)
  }

  const _transformProjects = (items: RepoProps[]) => {
    return items
      .map((item) => {
        const { id, name, description, html_url, topics, homepage, language } = item
        return {
          id,
          name,
          description,
          html_url,
          topics,
          homepage,
          language
        }
      })
      .filter((item) => item.name !== "davidaganov21.github.io")
      .sort(() => Math.random() - 0.5)
  }

  return { loading, error, clearError, getRepos }
}

export default useGithubService
