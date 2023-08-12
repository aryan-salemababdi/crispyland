import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, 
        Card,
        Grid,
        TextField,
        Typography } from "@mui/material";
import Link from "next/link";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("آدرس ایمیل وارد شده صحیح نمی باشد")
    .required("لطفا ایمیل خود را کنید"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "لطفا حداقل یک حرف بزرگ و کوچک استفاده کنید"
    )
    .required("لطفا رمز خود را وارد کنید"),
});

const SigninPage = () => {

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.status === "success") router.push("/")
    },
    validationSchema: validationSchema,
  });

  return (
    <div style={{ margin: "100px" }}>
      <Grid container display="flex" justifyContent="center">
        <Grid item>
          <Card sx={{ borderTop: "10px solid #f69435", padding: "20px" }}>
            <Typography textAlign="center" fontWeight="bold" variant="h5">
              ورود
            </Typography>
            <form onSubmit={formik.handleSubmit}>
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
                  <Button type="submit" variant="contained" color="warning">ورود</Button>
                </Grid>
              </Grid>
            </form>
            <Link  href="/signup" style={{textDecoration:"none"}}>
              <Typography
              fontWeight="bold"
              variant="body1"
              textAlign="center"
              m="10px 0px"
              >
                ثبت نام
              </Typography>
            </Link>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default SigninPage;
