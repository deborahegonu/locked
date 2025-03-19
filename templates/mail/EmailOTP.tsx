import { 
  Body,
  Container,
  Heading,
  Html,
  Link,
  Text,
  Tailwind
} from "@react-email/components";
import { GiPadlock } from "react-icons/gi";

interface EmailProps {
    pin: string
}

export function EmailOTP ({ pin }: EmailProps) {

  return (
    <Html>
      <Body>
        <Tailwind>
        <Container className="text-center flex flex-col items-center px-5 py-12  mx-auto shadow-xs my-5">
            <Link href={'/'} className="w-full flex justify-center items-center space-x-2 mx-auto  text-stone-900 text-2xl">
                <GiPadlock />
                <Text className="font-semibold tracking-wide text-2xl">locked</Text>
            </Link>
            <Heading as="h1" className="text-xl text-center my-2">Here is your One-time Password</Heading>
            <Text>to validate your email address</Text>
            <Text className="text-5xl tracking-wider font-semibold bg-stone-50 py-3"> {pin} </Text>
        
          </Container>
      
        </Tailwind>
      </Body>
    </Html>
  );
};