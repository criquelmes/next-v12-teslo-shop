import { FC } from "react";
import { ISize } from "@/interfaces";
import { Box, Button } from "@mui/material";

interface Props {
  selectedSize?: ISize;
  sizes: ISize[];
}

export const ProductSizeSelector: FC<Props> = ({ selectedSize, sizes }) => {
  return (
    <Box>
      {sizes.map((size) => (
        <Button
          key={size}
          size="small"
          sx={{
            display: "inline-block",
            border: "1px solid",
            borderColor: selectedSize === size ? "primary.main" : "grey.300",
            borderRadius: 1,
            p: 1,
            m: 1,
            cursor: "pointer",
          }}
        >
          {size}
        </Button>
      ))}
    </Box>
  );
};
