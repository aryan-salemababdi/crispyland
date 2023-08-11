import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Typography, Grid, Card, TextField, Button } from "@mui/material";
import FaceMesh from "../../modules/FaceMesh/FaceMesh";
import { useRouter } from "next/router";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("لطفا نام خود را وارد کنید"),
  lastName: Yup.string()
    .max(30, "Must be 30 characters or less")
    .required("لطفا نام خانوادگی خود را وارد کنید"),
  email: Yup.string().email("آدرس ایمیل وارد شده صحیح نمی باشد").required("لطفا ایمیل خود را کنید"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "لطفا حداقل یک حرف بزرگ و کوچک استفاده کنید"
    )
    .required("لطفا رمز خود را وارد کنید"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "رمز عبور تاییدی درست نمی باشد")
    .required("لطفا تایید رمز عبور خورد را وارد کنید"),
});

const SignupForm = () => {

  const [submit,setSubmit] = useState<boolean>(false);

  const router = useRouter();

  const [auth, setAuth] = useState({
    name: "",
    lastName: "",
    email: "",
    password: ""
  });


  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      setAuth(values);
      setSubmit(true);
    },
    validationSchema: validationSchema,
  });



  
  return (
    <div style={{ margin: "100px" }}>
      <Grid
        container
        display="flex"
        justifyContent="center"
        sx={{minHeight:"100vh",display:submit? "none" : "flex"}}
      >
        <Grid item>
          <Card sx={{ borderTop: "10px solid #f69435", padding: "20px" }}>
            <Typography textAlign="center" fontWeight="bold" variant="h5">
              <span>
                Crispy<span style={{ color: "#f69435" }}>Land</span>
              </span>{" "}
              ثبت نام در
            </Typography>
            <form onSubmit={formik.handleSubmit}>
              <Grid container justifyContent="center">
                <Grid mt={2} item>
                  <TextField
                    id="name"
                    label="نام"
                    variant="standard"
                    type="text"
                    {...formik.getFieldProps("name")}
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div>{formik.errors.name}</div>
                  ) : null}
                </Grid>
              </Grid>

              <Grid container justifyContent="center">
                <Grid mt={2} item>
                  <TextField
                    id="lastName"
                    label="نام خانوادگی"
                    variant="standard"
                    type="text"
                    {...formik.getFieldProps("lastName")}
                  />
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <div>{formik.errors.lastName}</div>
                  ) : null}
                </Grid>
              </Grid>

              <Grid container justifyContent="center">
                <Grid mt={2} item>
                  <TextField
                    id="email"
                    label="ایمیل"
                    variant="standard"
                    type="email"
                    {...formik.getFieldProps("email")}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                  ) : null}
                </Grid>
              </Grid>

              <Grid container justifyContent="center">
                <Grid mt={2} item>
                  <TextField
                    id="password"
                    label="رمزعبور"
                    variant="standard"
                    type="password"
                    {...formik.getFieldProps("password")}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div>{formik.errors.password}</div>
                  ) : null}
                </Grid>
              </Grid>

              <Grid container justifyContent="center">
                <Grid mt={2} item>
                  <TextField
                    id="confirmPassword"
                    label="تایید رمز عبور"
                    variant="standard"
                    type="password"
                    {...formik.getFieldProps("confirmPassword")}
                  />
                  {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword ? (
                    <div>{formik.errors.confirmPassword}</div>
                  ) : null}
                </Grid>
              </Grid>

              <Grid container justifyContent="center">
                <Grid mt={2} item>
                  <Button type="submit" variant="contained" color="warning">تایید</Button>
                </Grid>
              </Grid>
            </form>
          </Card>
        </Grid>
      </Grid>
      {
        submit?
      <FaceMesh
      auth = {auth}
        onSubmitFacemesh={(authFacemesh) => {
          if (authFacemesh) {
            router.push("/");
          }
        }}
      />
      :
      ""
}
    </div>
  );
};

export default SignupForm;
