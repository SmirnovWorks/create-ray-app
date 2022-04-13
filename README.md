# Create Ray App 

This project is created to help find bugs and simulate [Ray](https://github.com/WeConnect/ray2) library consumers

## Run

```bash
yarn
yarn start
```

## Run with local version of Ray

Because [Hooks don't work with yarn link](https://github.com/facebook/react/issues/14257) and yarn link is useful tool. I've created a script to link ray library to this project:

```bash
chmod +x ./link_ray
./link_ray PATH_TO_RAY
```

## Check build without link

```bash
cd PATH_TO_RAY
npm pack

cd PATH_TO_CRA
yarn add PATH_TO_RAY/wework-ray2-<VERSION>.tgz
```