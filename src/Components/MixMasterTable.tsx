import React from 'react';
import {
    Table,
    Tbody,
    Tr,
    Td,
    TableContainer,
    Box,
    Flex,
  } from '@chakra-ui/react';

const MixMasterTable = () => {
  return (
    <Flex justifyContent="center">
        <TableContainer width={"90%"}>
          <Table variant='striped'>
            <Tbody>
              <Tr>
                <Td width="50%">No of tracks / Stems in your song</Td>
                <Td width="50%">10</Td>
              </Tr>
              <Tr>
                <Td width="50%">Number of Songs</Td>
                <Td width="50%">5</Td>
              </Tr>
              <Tr>
                <Td width="50%">Revisions</Td>
                <Td width="50%">2</Td>
              </Tr>
              <Tr>
                <Td width="50%">Revert Time</Td>
                <Td width="50%">3 Days</Td>
              </Tr>
              <Tr>
                <Td width="50%">Number of Songs</Td>
                <Td width="50%">Limited</Td>
              </Tr>
              <Tr>
                <Td width="50%">Revisions</Td>
                <Td width="50%">2</Td>
              </Tr>

            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
  )
}

export default MixMasterTable;