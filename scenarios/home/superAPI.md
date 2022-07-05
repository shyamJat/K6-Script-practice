### Preparation
- Change `serverCount` in `scenarios` to how many k6 servers you want to run.

### Verify script

```
LB_HOST=https://lb1-ms.tiket.com GC_HOST=https://lb1-ms.tiket.com HOME_HOST=https://api.tiket.com/ms-gateway MODE=regular SERVICE=superApiProd ./local-verify.sh
```

### Running SuperAPI

```
LB_HOST=https://lb1-ms.tiket.com GC_HOST=https://lb1-ms.tiket.com HOME_HOST=https://api.tiket.com/ms-gateway MODE=regular SERVICE=superApiProd TOTAL_VUS=2000 ./run.sh
```