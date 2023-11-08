import React from "react";
import { Box, Image } from "@chakra-ui/react";

function CardWrap({ imageUrl, imageAlt, title, price, total }) {
    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={imageUrl} alt={imageAlt} />

            <Box p="6">
                <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" noOfLines={1}>
                    {title}
                </Box>
                <Box display="flex" mt="8" justifyContent="space-between">
                    <Box display="flex" flexDirection="column">
                        <Box as="span" color="gray.600" fontSize="sm">
                            Floor
                        </Box>
                        <Box as="span" color="gray.600" fontSize="sm">
                            {price} ETH
                        </Box>
                    </Box>
                    <Box display="flex" flexDirection="column">
                        <Box as="span" color="gray.600" fontSize="sm">
                            Total
                        </Box>
                        <Box as="span" color="gray.600" fontSize="sm">
                            {total} ETH
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default CardWrap;
