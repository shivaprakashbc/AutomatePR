import { Octokit, App } from "octokit";
import 'dotenv/config';

const octokit = new Octokit({ auth: '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' });

let response = await octokit.request('POST /repos/shivaprakashbc/AutomatePR/pulls', {
  owner: 'shivaprakashbc',
  repo: 'AutomatePR',
  title: 'My first pull request using the API',
  body: 'This is simply a pull request for demo purposes',
  head: 'new',
  base: 'main'
}); 

console.log(response);
