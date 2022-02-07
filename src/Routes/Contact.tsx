import styled from "styled-components";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { ParentsVariants, ParentsTransition } from "./Projects";
import { init, send } from "@emailjs/browser";

const Wrapper = styled.div`
  width: 100%;
  padding-top: 120px;
  display: flex;
`;

const SideContainer = styled(motion.div)`
  position: fixed;
`;

const Title = styled.div`
  font-size: 60px;
  font-weight: 100;
`;

const SideNav = styled.div``;

const Main = styled.div`
  width: 100%;
  padding: 50px 20px 20px 100px;
`;

const ContactBox = styled(motion.div)`
  width: 100%;
  position: absolute;
  right: 0;
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  padding-right: 50px;
  border-right: 2px #eec373 solid;

  label {
    margin-bottom: 10px;
  }
  input {
    width: 300px;
    height: 30px;
    margin-bottom: 20px;
    border-radius: 10px;
    border: none;
    padding: 5px 10px;
  }
  textarea {
    width: 300px;
    height: 200px;
    margin-bottom: 20px;
    border: none;
    border-radius: 10px;
    padding: 10px;
  }
  button {
    width: 80px;
    height: 40px;
    border: none;
    background-color: #95c9b9;
    color: white;
    align-self: center;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      background-color: #87b4a8;
    }
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  span {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  }
  span:last-child i {
    font-size: 20px;
  }
`;

interface IForm {
  title: string;
  from_email: string;
  from_name: string;
  messages: string;
}

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IForm>();
  const isValid = (data: IForm) => {
    init("user_NgEWT8fvU03MlBZBtmRfp");
    const email = {
      title: data.title,
      from_email: data.from_email,
      from_name: data.from_name,
      messages: data.messages,
    };
    send("service_xtm6xah", "template_ubdf38s", email).then(
      function (response) {
        reset();
        window.alert(
          "Thank you! Your messages have been sent to me, I would reply to you soon😘"
        );
      },
      function (error) {
        window.alert("Sorry! Sending messages is failed...🙃");
      }
    );
  };
  return (
    <Wrapper className="wrapper">
      <SideContainer
        className="side-container"
        initial="out"
        animate="in"
        exit="out"
        variants={ParentsVariants}
        transition={ParentsTransition}
      >
        <Title className="side_title">contact_</Title>
        <SideNav></SideNav>
      </SideContainer>
      <Main className="main">
        <ContactBox
          className="main_contact"
          initial="out"
          animate="in"
          exit="out"
          variants={ParentsVariants}
          transition={ParentsTransition}
        >
          <ContactForm
            className="contact_form"
            onSubmit={handleSubmit(isValid)}
          >
            <label htmlFor="from_name">Name</label>
            <input
              {...register("from_name", { required: "Your name is required" })}
              id="from_name"
              type="text"
            ></input>
            <span>{errors?.from_name?.message}</span>
            <label htmlFor="from_email">Email</label>
            <input
              {...register("from_email", {
                required: "Email address is required",
                pattern: {
                  value:
                    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
                  message: "It is not valid email address",
                },
              })}
              id="from_email"
              type="email"
            ></input>
            <span>{errors?.from_email?.message}</span>
            <label htmlFor="title">Title</label>
            <input
              {...register("title", { required: "Title is required" })}
              id="title"
              type="text"
            ></input>
            <span>{errors?.title?.message}</span>
            <label htmlFor="messages">Messages</label>
            <textarea
              {...register("messages", {
                required: "Content address is required",
                minLength: {
                  value: 10,
                  message: "Contents should be more than 10 letters",
                },
              })}
              id="messages"
            ></textarea>
            <span>{errors?.messages?.message}</span>
            <button>Send</button>
          </ContactForm>
          <ContactInfo className="contact_info">
            <span>
              <i className="fas fa-map-marker-alt"></i> &nbsp;Daegu, South Korea
            </span>
            <span>
              <i className="fas fa-envelope"></i> &nbsp;beomseokchoi@naver.com
            </span>
            <span>
              <i className="fas fa-language"></i>{" "}
              &nbsp;korean🇰🇷&nbsp;english🇬🇧&nbsp;italian🇮🇹
            </span>
          </ContactInfo>
        </ContactBox>
      </Main>
    </Wrapper>
  );
}

export default Contact;
