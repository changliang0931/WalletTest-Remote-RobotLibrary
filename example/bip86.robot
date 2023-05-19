*** Settings ***
Variables    common.yaml
Library      Remote         http://${HOST}:${PORT}    AS    BIP86

*** Test Cases ***
BIP86 TEST    ${account} =    BIP86.Derive From Mnemonic And Path
              ...             ${MNEMONIC}
              ...             ${PATH}
              BuiltIn.Log     ${account}
