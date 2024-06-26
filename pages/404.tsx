import { ShopLayout } from "@/components/layouts";
import { Box, Typography } from "@mui/material";
import React from "react";

const Custom404Page = () => {
  return (
    <ShopLayout
      title="Contenido no encontrado"
      pageDescription="No hay nada que mostrar aquí"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 200px)"
        sx={{ flexDirection: { xs: "column", sm: "row" } }}
      >
        <Typography variant="h1" component="h1" fontSize={80} fontWeight={200}>
          404 |
        </Typography>
        <Typography marginLeft={2}>No encontramos ningún contenido</Typography>
      </Box>
    </ShopLayout>
  );
};

export default Custom404Page;
