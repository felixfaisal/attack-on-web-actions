# Attack on Web Action

This action looks for vulnerable code inside your repository that could be potential data leak such as API keys 
We check for API keys of around 25 providers 

## Inputs

# `repo-name`
The name of the repository where you are calling this actions 

**Required** This input is required for the action to run

## Example usage

```
uses: felixfaisal/attack-on-web-actions@v1.9
with:
  repo-name: 'my-repo'
```
