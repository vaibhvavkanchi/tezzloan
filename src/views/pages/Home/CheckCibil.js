import {
  Box,
  Container,
  Grid,
  styled,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";

const StyledBox = styled(Box)(({ theme }) => ({
  background: "#fff",
  paddingTop: "35px",
  paddingBottom: "100px",
  "@media (max-width: 680px)": {
    paddingBottom: "0px",
  },
  "& .subTitle": {
    fontSize: "24px",
    fontWeight: 700,
    fontFamily: "Open Sans",
    color: theme.palette.text.main,
    marginTop: "10px",
    "@media (max-width: 680px)": {
      fontSize: "16px",
    },
  },
  "& .text": {
    fontSize: "16px",
    fontFamily: "Open Sans",
    color: theme.palette.text.main,
    marginTop: "10px",
    "@media (max-width: 680px)": {
      fontSize: "14px",
    },
  },
  "& .list": {
    listStyle: "none",
    padding: "0px",
    marginTop: "15px",
    "& li": {
      paddingLeft: "25px",
      backgroundImage: "url('images/Check.png')",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "left center",
      backgroundSize: "15px 15px",
      marginTop: "10px",
      color: theme.palette.text.main,
      fontSize: "14px",
      fontFamily: "Open Sans",
      "@media (max-width: 680px)": {
        fontSize: "12px",
      },
    },
  },
  "& .expert": {
    fontSize: "27px",
    fontWeight: 700,
    fontFamily: "Open Sans",
    [theme.breakpoints.down("md")]:{
      fontSize:"20px"
    }
  },
  "& .card": {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    "& img": {
      width: "160px",
      height: "115px",
      borderRadius: "6px",
      objectFit: "cover",
    },
    "& .name": {
      fontSize: "12px",
      fontWeight: 700,
      fontFamily: "Open Sans",
      color: theme.palette.secondary.main,
      textTransform: "uppercase",
      "@media (max-width: 680px)": {
        fontWeight: 600,
      },
    },
    "& .subname": {
      fontSize: "18px",
      fontWeight: 700,
      fontFamily: "Open Sans",
      color: theme.palette.text.main,
      marginTop: "10px",
      "@media (max-width: 680px)": {
        fontSize: "12px",
        fontWeight: 600,
      },
    },
  },
}));

const CheckCibil = () => {
  const isSmall = useMediaQuery("(max-width:680px)");

  return (
    <StyledBox>
      <Container>
        <Grid container>
          <Grid item xs={12} md={7}>
            <Typography
              sx={{ fontFamily: "Open Sans" }}
              variant="h1"
              data-aos="fade-up"
            >
              Check Your CIBIL Score
            </Typography>
            <Typography className="subTitle" data-aos="fade-up">
              Credit Score Report Absolutely{" "}
              <span style={{ color: "#4154FA" }}>FREE</span>
            </Typography>
            <Typography className="text" data-aos="fade-up">
              Already checked your score before?{" "}
              <span style={{ color: "#4154FA", fontWeight: 700 }}>LOGIN</span>{" "}
              to see your detailed CIBIL Report.
            </Typography>
            {isSmall && (
              <Grid
                item
                xs={12}
                md={5}
                className="flex justify-center  items-center my-[36px] "
              >
                <img
                  loading="lazy"
                  src="images/cibilIMG.png"
                  alt="Check Cibil"
                  data-aos="zoom-out"
                  className="max-w-[224px] w-full"
                />
              </Grid>
            )}

            <ul className="list">
              <li data-aos="fade-up">Reduce rates on your existing Loans.</li>
              <li data-aos="fade-up">Suggest Better Rewards Credit Cards.</li>
              <li data-aos="fade-up">Tips on Improving Credit Score.</li>
              <li data-aos="fade-up">
                CIBIL requires accurate details to ensure accuracy & security.
              </li>
              <li data-aos="fade-up">
                Make sure they match your banking records.
              </li>
            </ul>
          </Grid>
          {!isSmall && (
            <Grid item xs={12} md={5} className="flex justify-end items-center">
              <img
                loading="lazy"
                src="images/cibilIMG.png"
                alt="Check Cibil"
                data-aos="zoom-out"
              />
            </Grid>
          )}
        </Grid>

        <Box sx={{ mt: "85px" }}>
          <Typography className="expert" data-aos="fade-up">
            From our experts
          </Typography>
          <Grid
            container
            sx={{ mt: isSmall ? "18px" : "25px" }}
            spacing={isSmall ? 0 : 3}
          >
            <Grid item xs={12} md={6} data-aos="fade-right">
              <Box className="card">
                {!isSmall && (
                  <img
                    loading="lazy"
                    src="https://s3-alpha-sig.figma.com/img/18f1/2e6d/ce1fcd1b63e40b55a157274b8e692c89?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o5j4QNhJPwH7u493B9j3UXdOvPmuO5krrYSk1zqC1yJjoEz0bPnIfyLb7gpmHFgkQczaHX0odAwPWDM-jqgi9SdQ5fQ~N4jvbx8vAd-iqH-PWn44J6yWCB571iabvV8~308RI9glm91grtfHoHgVSCXg8-qaqD3pbSxj2vpL6oHOjPc~ZfmrhEVrG9ZDNaXYJAgzsOc6f4~9Br6VBuca6JF9y6jxDOVWBiI6qdXAukb4uZjuOIWXLAlB49tRu3jG0agjubYtgM5h0mwUH01xEUG9Q~iAhJOv-8Nolt0tqsqsDyYaW6rdN7NZkmQZP1mH3E6txSn0QHAjPZ8axO-bFg__"
                  />
                )}
                <Box>
                  <Typography className="name">
                    Best Credit Cards in October 2024
                  </Typography>
                  <Typography className="subname">
                    11 Best Rewards Credit Cards in October 2024
                  </Typography>
                </Box>
              </Box>
              {isSmall && (
                <hr style={{ marginTop: "10px", marginBottom: "10px" }} />
              )}
            </Grid>
            <Grid item xs={12} md={6} data-aos="fade-left">
              <Box className="card">
                {!isSmall && (
                  <img
                    loading="lazy"
                    src="https://s3-alpha-sig.figma.com/img/184a/c2a2/f8e530a475ddc9cd68a7476463c6a1e9?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jxsszhaiGf5paJInfXoSxBnE2~hDrA054HDOmh~hqGbiaHVnTuv8lfpkTSTECbt-IuReLCOUcBEFLW5CIzbR24onG5Q4DdaSDqjn3DvDB~f8b-~HsmAYH7hQlC5qP-bwNR4fPo78T7jgjnJwXOW1pqwHYEgYB642rN2Je~3LjxY75wqFlNa1PtC6R48KRKqh8ftC9tIhrngRT7cTtWfpDpcJ80lyjR5yyWdF0IDfmQQpiL6XwNgGpA8tQja84OlvXZdTnFFt4x9COMt583qk1alcs31oPENYNTc483~3KgBgKnRakYVIQLlk6oZ1EV3SCSTE87uxyEYx6zCk4EnjoA__"
                  />
                )}
                <Box>
                  <Typography className="name">
                    Best Credit Cards in October 2024
                  </Typography>
                  <Typography className="subname">
                    11 Best Rewards Credit Cards in October 2024
                  </Typography>
                </Box>
              </Box>
              {isSmall && (
                <hr style={{ marginTop: "10px", marginBottom: "10px" }} />
              )}
            </Grid>
            <Grid item xs={12} md={6} data-aos="fade-right">
              <Box className="card">
                {!isSmall && (
                  <img
                    loading="lazy"
                    src="https://s3-alpha-sig.figma.com/img/b7c3/f46d/a4d79b5dc8dbbd568474f9411da98e0d?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=poCtr0jLyYNF0lR5cpY5MbcFPjBmqFUUxyDw1HidSAJN6MPtPIkKGgwr-WKie2SwaN4caz936c~u2rD2hmvNLyTpM81V~i9e6ro75jK8p032xX90rfQnKm1m74glK0~R~-WLHN8TbcdEKrt4UzazWdJ5wSt6WCiuL~QkaxAfeZ2FHMYE5PcxSE4sG907d~cGIB5uaLVoaNmAH1ErfBLId4WcFYFBdaOuklZfkiBf4bkn87xldsGHJFtGzUZL9e9Ax8S76rQSjL50isZmkzUual~ToAt8Ep54XOHoGf2C14qmxCjxDuCoLdXJG3RLBxVZTSwJOUJv2GuMaVWwMSDpZg__"
                  />
                )}
                <Box>
                  <Typography className="name">
                    Best Credit Cards in October 2024
                  </Typography>
                  <Typography className="subname">
                    11 Best Rewards Credit Cards in October 2024
                  </Typography>
                </Box>
              </Box>
              {isSmall && (
                <hr style={{ marginTop: "10px", marginBottom: "10px" }} />
              )}
            </Grid>
            <Grid item xs={12} md={6} data-aos="fade-left">
              <Box className="card">
                {!isSmall && (
                  <img
                    loading="lazy"
                    src="https://s3-alpha-sig.figma.com/img/3768/613a/b967fbb0ac16f2df7ddaf8ad4f6f4718?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KI8N0AwkNNQiZyzoexdZgajDI~5JWlXhjv8YKTbnXgsrQvKskj0PCEqF92KdjUe4BcOK5gduB-RNJQ466saFTC8tKf~hAvSiF8moUR1GcVZ5st-rk-RScXEOYOoCvMqBs2teT-oUm2AIQFubh1pi7fCsFTA~axjhV293YVLcMvve5MQW-aNjK~EroPfbqG2wtCRkc2pX-jCYERyc95TtK82~jM~MEDiWDmVVwawa5Zs9C5topjbo9rCIfJczBsuO81mxXwRsDle2-fmCMeY8B9qVen9EJJez7KutHi-vdRDlOKmkCSdHxZhdMV5J8f66VcVLp0wGEV-QU6ofY1zcnA__"
                  />
                )}
                <Box>
                  <Typography className="name">
                    Best Credit Cards in October 2024
                  </Typography>
                  <Typography className="subname">
                    11 Best Rewards Credit Cards in October 2024
                  </Typography>
                </Box>
              </Box>
              {isSmall && (
                <hr style={{ marginTop: "10px", marginBottom: "10px" }} />
              )}
            </Grid>
            <Grid item xs={12} md={6} data-aos="fade-right">
              <Box className="card">
                {!isSmall && (
                  <img
                    loading="lazy"
                    src="https://s3-alpha-sig.figma.com/img/c226/0a07/98ce160b386437d7db343b4906543211?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kH3s6Jg1g0H51YIlmn-YhSmTIg~~27lX3SD4KLknKnHrtEs5-XPUjrnYmxtQIqPZ2UsifUMs8kB042UCsPjV9TH1M9FWXWskRLDJf-qk0zt6M5NpmLyjMdP4KWloRk2hzIFhIGekVJoUECqJV8W4z1EbwQGZcp6lECZhJ3c431s17YdfBxZ4SLtVMW2x6w~RwsNKZX7UIPsOSNAr9oOuWx2plOaCyh3R1T9HJ47tbS9pa0eWy4UeETJhTyMCSeypMt~dFRYqbp9qV35VpGfxVw97flw0jtpvce9-hIvYw9mf7ZtGfIdOIrJA4nCqEdcSxdZ~LFsCIe~1UFbH73tHfQ__"
                  />
                )}
                <Box>
                  <Typography className="name">
                    Best Credit Cards in October 2024
                  </Typography>
                  <Typography className="subname">
                    11 Best Rewards Credit Cards in October 2024
                  </Typography>
                </Box>
              </Box>
              {isSmall && (
                <hr style={{ marginTop: "10px", marginBottom: "10px" }} />
              )}
            </Grid>
            <Grid item xs={12} md={6} data-aos="fade-left">
              <Box className="card">
                {!isSmall && (
                  <img
                    loading="lazy"
                    src="https://s3-alpha-sig.figma.com/img/bb9a/c6af/6a4c9b73822dc334e7fe8aa91d37e47a?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dnQRrzswsvflocUSGDGy1RJilGKYvw3wQRbrhXXILQwb0QeQVGekCV4YTPUigzXzME93N6DkKzQzJ7aQkjVprVylQS43U-QoRDwbxQZOwZxZUM4jjpZ2CSQE86AzB5GR0V6g~CFZdLs80EO3QUeYPXslKAyQB5GOGqeprHIg3gJ2x2pPJRYyJ-0bMXV4PxrFK8NHRQ5U-bVwygbZfJPQ8NJLOmzXsva0c4MhFpIVh-~uFZ89rd8s-N9HhiyTRBAYryC2qaRdgu0hrKZPGUrlVm-4qpkZOO41QTfNM~yIpZOqKlFkVknpw5gqul84zYr2iRAMWkVc2BO~rWowbU5C8A__"
                  />
                )}
                <Box>
                  <Typography className="name">
                    Best Credit Cards in October 2024
                  </Typography>
                  <Typography className="subname">
                    11 Best Rewards Credit Cards in October 2024
                  </Typography>
                </Box>
              </Box>
              {isSmall && (
                <hr style={{ marginTop: "10px", marginBottom: "10px" }} />
              )}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </StyledBox>
  );
};

export default CheckCibil;
