import { render , screen  } from "@testing-library/react"
import Avatars from ".";

test("Check for Avatar", async()=>{
    render(<Avatars chars="S"/>);
    const MuiElement = screen.getByText(/S/i);
    expect(MuiElement).toBeInTheDocument();
})