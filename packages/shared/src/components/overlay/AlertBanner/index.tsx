import { Close } from "@mui/icons-material";
import { Box, Button, IconButton, Typography } from "@mui/material";

interface AlertBannerProps {
  onClose: () => void;
}

const AlertBanner = ({ onClose }: AlertBannerProps) => {
  return (
    <Box
      className="relative w-full h-12 flex items-center justify-between px-6"
      sx={{
        background:
          "linear-gradient(91.11deg, #9673e9 0.3%, #c558e5 29.11%, #ec9c75 57.17%, #ec7b5c 76.66%, #e9ae89 98.87%)",
      }}
    >
      <Box />

      <Box className="flex items-center gap-4">
        <Typography className="text-white text-sm font-medium">
          14 days left in your plan
        </Typography>

        <Button
          variant="contained"
          className="bg-white text-purple-600 text-primary hover:bg-white/90 shadow-sm h-8 px-4 font-medium text-sm normal-case"
          sx={{
            backgroundColor: "white",
            color: "#9333ea",
            "&:hover": { backgroundColor: "rgba(255,255,255,0.9)" },
            textTransform: "none",
            fontWeight: 500,
          }}
        >
          Upgrade your plan
        </Button>
      </Box>

      <IconButton
        onClick={onClose}
        className="text-white hover:text-gray-200 cursor-pointer p-1 flex items-center justify-center"
        aria-label="Close"
        size="small"
        sx={{ color: "rgba(255,255,255,0.8)", "&:hover": { color: "white" } }}
      >
        <Close fontSize="small" />
      </IconButton>
    </Box>
  );
};

export default AlertBanner;
