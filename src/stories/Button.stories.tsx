import { Story } from "@storybook/react";
import Button, { ButtonProps } from "../components/Button";

export default {
    component: Button,
    title: "Button",
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: "Default",
};

export const Login = Template.bind({});
Login.args = {
    textColor: "#000",
    color: "#FFE144",
    children: "Kakao",
};

export const Next = Template.bind({});
Next.args = {
    textColor: "#fff",
    color: "#3888FF",
    children: "다음페이지로",
};
