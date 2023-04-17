import React from 'react'
import { Text, HStack, Avatar } from '@chakra-ui/react'

const Messages = ({ text, uri, user = "other" }) => {
    return (
        <HStack alignSelf={user === "me" ? "flex-end" : "flex-start"} bg={"gray.100"} borderRadius={'base'} paddingY={"1"} paddingX={"4"}>
           {
            user === "other" && <Avatar src={uri}/>
           }
            <Text>{text}</Text>
           {
            user === "me" && <Avatar src={uri}/>
           }
        </HStack>
    )
}

export default Messages;
