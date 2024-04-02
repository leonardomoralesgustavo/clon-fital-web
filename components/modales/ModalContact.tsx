import { useTemporalMsg } from "@/hooks";
import { addContactService } from "@/interfaces";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";

type Props = {
  onClose: () => void;
};
export const ModalContact: FC<Props> = ({ onClose }) => {
  // STATES
  const [openSuccess, setOpenSuccess] = useState(false); // state change success message in modal
  //HOOKS PERSONALIZADOS
  const [msg, setMsg, initMsg] = useTemporalMsg(4000);
  const router = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const data = await addContactService({
      name: event.target.name.value,
      last_name: event.target.lastName.value,
      phone: event.target.phone.value,
      email: event.target.email.value,
    });
    if (!data.success) {
      setMsg({ text: data.errors![0], type: "error" });
    } else {
      onClose();
      window.open("https://fitalmx.com/thank_you","_self");
    }
  };
  return (
    <Box sx={style}>
      {!openSuccess ? (
        <>
          <Box
            sx={style}
            onSubmit={handleSubmit}
            component="form"
            alignItems={"center"}
          >
            <Typography
              textAlign={"center"}
              component={"h1"}
              fontSize={"20px"}
              fontWeight={700}
              mb={2}
              color={"black"}
            >
              Contáctanos
            </Typography>
            <TextField
              name="name"
              label=""
              placeholder="Nombre"
              type="text"
              required
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "left",
                color: "white",
                flexDirection: "column",
              }}
            />
            <TextField
              name="lastName"
              label=""
              placeholder="Apellido"
              type="text"
              required
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "left",
                color: "white",
                flexDirection: "column",
              }}
            />
            <TextField
              name="phone"
              label=""
              placeholder="Teléfono"
              type="text"
              required
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "left",
                color: "white",
                flexDirection: "column",
              }}
            />
            <TextField
              name="email"
              label=""
              placeholder="Correo"
              type="text"
              required
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "left",
                color: "white",
                flexDirection: "column",
              }}
            />
            <Typography
              sx={{
                textAlign: "center",
                color: msg.type === "error" ? "crimson" : "green",
                mt: 2,
              }}
            >
              {msg.text}
            </Typography>
            <Button
              type="submit"
              sx={{
                width: "100%",
                height: "50px",
                bgcolor: "#B100FF",
                color: "white",
                mt: 2,
              }}
            >
              Enviar
            </Button>
          </Box>
        </>
      ) : (
        <>
          {" "}
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              ¡Muchas gracias!
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Nos pondremos en contacto contigo.
            </Typography>
          </Box>
        </>
      )}
    </Box>
  );
};

const style = {
  position: "absolute" as "absolute",
  display: "flex",
  flexDirection: "column",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  p: 4,
  width: "400px",
  gap: 2,
};
