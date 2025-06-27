import dotenv from "dotenv";
dotenv.config();

import express from "express";

const app = express();
const port = process.env.PORT || 3000;

const githubData = {
  login: "Utkarsh102002",
  id: 128974569,
  node_id: "U_kgDOB6_-6Q",
  avatar_url: "https://avatars.githubusercontent.com/u/128974569?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Utkarsh102002",
  html_url: "https://github.com/Utkarsh102002",
  followers_url: "https://api.github.com/users/Utkarsh102002/followers",
  following_url:
    "https://api.github.com/users/Utkarsh102002/following{/other_user}",
  gists_url: "https://api.github.com/users/Utkarsh102002/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/Utkarsh102002/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/Utkarsh102002/subscriptions",
  organizations_url: "https://api.github.com/users/Utkarsh102002/orgs",
  repos_url: "https://api.github.com/users/Utkarsh102002/repos",
  events_url: "https://api.github.com/users/Utkarsh102002/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/Utkarsh102002/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: null,
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 10,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2023-03-26T11:48:50Z",
  updated_at: "2025-06-12T12:03:44Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/login", (req, res) => {
  res.send("login page");
});

app.get("/name", (req, res) => {
  const userName = req.query.name; // `name` parameter ko request se nikala
  res.send(`Hello, ${userName}! Welcome to our site.`);
});

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
