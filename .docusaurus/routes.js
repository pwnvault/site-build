import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/empty',
    component: ComponentCreator('/empty', '555'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '827'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '18b'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '7eb'),
            routes: [
              {
                path: '/contact',
                component: ComponentCreator('/contact', '459'),
                exact: true
              },
              {
                path: '/contribute',
                component: ComponentCreator('/contribute', '328'),
                exact: true
              },
              {
                path: '/env',
                component: ComponentCreator('/env', '740'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/env/active-directory',
                component: ComponentCreator('/env/active-directory', '771'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/env/active-directory/attacks/ACL Abuse',
                component: ComponentCreator('/env/active-directory/attacks/ACL Abuse', '799'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/env/active-directory/attacks/asrep-roasting',
                component: ComponentCreator('/env/active-directory/attacks/asrep-roasting', 'df4'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/env/active-directory/attacks/Cross-Trust Roasting',
                component: ComponentCreator('/env/active-directory/attacks/Cross-Trust Roasting', 'b0c'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/env/active-directory/attacks/DCSync',
                component: ComponentCreator('/env/active-directory/attacks/DCSync', 'b1c'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/env/active-directory/attacks/ExtraSIDs',
                component: ComponentCreator('/env/active-directory/attacks/ExtraSIDs', '5f8'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/env/active-directory/attacks/Kerberoasting',
                component: ComponentCreator('/env/active-directory/attacks/Kerberoasting', '8bf'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/env/active-directory/attacks/Password Spraying',
                component: ComponentCreator('/env/active-directory/attacks/Password Spraying', '664'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/env/active-directory/attacks/Reversible Password encryption',
                component: ComponentCreator('/env/active-directory/attacks/Reversible Password encryption', 'b09'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/env/active-directory/cheat-sheets/Attacking AD Command Cheat sheet',
                component: ComponentCreator('/env/active-directory/cheat-sheets/Attacking AD Command Cheat sheet', '636'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/env/active-directory/enumeration/external/Enumerating Password Policies',
                component: ComponentCreator('/env/active-directory/enumeration/external/Enumerating Password Policies', '735'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/env/active-directory/enumeration/external/External Enumeration',
                component: ComponentCreator('/env/active-directory/enumeration/external/External Enumeration', 'fb7'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/env/active-directory/enumeration/internal/Access Control Lists',
                component: ComponentCreator('/env/active-directory/enumeration/internal/Access Control Lists', 'a96'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/env/active-directory/enumeration/internal/Checklist',
                component: ComponentCreator('/env/active-directory/enumeration/internal/Checklist', '69f'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/env/active-directory/enumeration/internal/Domain Trusts',
                component: ComponentCreator('/env/active-directory/enumeration/internal/Domain Trusts', 'a90'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/env/active-directory/enumeration/internal/Privileged Access to Services',
                component: ComponentCreator('/env/active-directory/enumeration/internal/Privileged Access to Services', '5d8'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/env/active-directory/enumeration/internal/Security Controls',
                component: ComponentCreator('/env/active-directory/enumeration/internal/Security Controls', '084'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/misc',
                component: ComponentCreator('/misc', '5e0'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/misc/PowerShell Credential object',
                component: ComponentCreator('/misc/PowerShell Credential object', '504'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/pivoting',
                component: ComponentCreator('/pivoting', 'bfd'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/pivoting/netsh',
                component: ComponentCreator('/pivoting/netsh', 'f0f'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/pwn',
                component: ComponentCreator('/pwn', '00b'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/services',
                component: ComponentCreator('/services', '3de'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/services/MSSQL',
                component: ComponentCreator('/services/MSSQL', '000'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/services/Remote Desktop',
                component: ComponentCreator('/services/Remote Desktop', '47e'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/services/WinRM',
                component: ComponentCreator('/services/WinRM', 'ded'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/tools',
                component: ComponentCreator('/tools', '3fd'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/tools/ADSI Edit',
                component: ComponentCreator('/tools/ADSI Edit', '264'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/tools/BloodHound',
                component: ComponentCreator('/tools/BloodHound', '6e1'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/tools/Evil-WinRM',
                component: ComponentCreator('/tools/Evil-WinRM', '784'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/tools/Impacket/',
                component: ComponentCreator('/tools/Impacket/', '4b6'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/tools/Impacket/GetUserSPNs.py',
                component: ComponentCreator('/tools/Impacket/GetUserSPNs.py', '43a'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/tools/Impacket/lookupsid.py',
                component: ComponentCreator('/tools/Impacket/lookupsid.py', '61e'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/tools/Impacket/mssqlclient.py (Impacket)',
                component: ComponentCreator('/tools/Impacket/mssqlclient.py (Impacket)', '426'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/tools/Impacket/psexec.py',
                component: ComponentCreator('/tools/Impacket/psexec.py', '2c7'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/tools/Impacket/raiseChild.py',
                component: ComponentCreator('/tools/Impacket/raiseChild.py', '751'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/tools/Impacket/secretsdump.py',
                component: ComponentCreator('/tools/Impacket/secretsdump.py', '8c2'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/tools/Impacket/ticketer.py',
                component: ComponentCreator('/tools/Impacket/ticketer.py', 'a18'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/tools/Kerbrute',
                component: ComponentCreator('/tools/Kerbrute', '831'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/tools/klist',
                component: ComponentCreator('/tools/klist', 'ad5'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/tools/Mimikatz',
                component: ComponentCreator('/tools/Mimikatz', '3de'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/tools/netdom',
                component: ComponentCreator('/tools/netdom', 'ab4'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/tools/PowerShell',
                component: ComponentCreator('/tools/PowerShell', '37b'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/tools/PowerView',
                component: ComponentCreator('/tools/PowerView', '4ec'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/tools/rubeus',
                component: ComponentCreator('/tools/rubeus', '3ba'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/tools/SQLMap',
                component: ComponentCreator('/tools/SQLMap', 'b46'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
