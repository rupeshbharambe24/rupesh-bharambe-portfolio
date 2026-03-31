export interface GitHubStats {
  publicRepos: number;
  followers: number;
}

export async function getGitHubStats(
  username: string,
): Promise<GitHubStats | null> {
  try {
    const res = await fetch(`https://api.github.com/users/${username}`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) return null;

    const data = await res.json();

    return {
      publicRepos: data.public_repos,
      followers: data.followers,
    };
  } catch {
    return null;
  }
}
