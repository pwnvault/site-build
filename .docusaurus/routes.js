import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
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
    component: ComponentCreator('/', '2a9'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '77c'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '072'),
            routes: [
              {
                path: '/contact',
                component: ComponentCreator('/contact', '566'),
                exact: true
              },
              {
                path: '/contribute',
                component: ComponentCreator('/contribute', '909'),
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
                component: ComponentCreator('/env/active-directory/attacks/ACL Abuse', 'a6a'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/env/active-directory/attacks/asrep-roasting',
                component: ComponentCreator('/env/active-directory/attacks/asrep-roasting', '93f'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/env/active-directory/attacks/Cross-Trust Roasting',
                component: ComponentCreator('/env/active-directory/attacks/Cross-Trust Roasting', '93d'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/env/active-directory/attacks/DCSync',
                component: ComponentCreator('/env/active-directory/attacks/DCSync', '3f6'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/env/active-directory/attacks/ExtraSIDs',
                component: ComponentCreator('/env/active-directory/attacks/ExtraSIDs', 'eeb'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/env/active-directory/attacks/Kerberoasting',
                component: ComponentCreator('/env/active-directory/attacks/Kerberoasting', '2e4'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/env/active-directory/attacks/Password Spraying',
                component: ComponentCreator('/env/active-directory/attacks/Password Spraying', '04c'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/env/active-directory/attacks/Reversible Password encryption',
                component: ComponentCreator('/env/active-directory/attacks/Reversible Password encryption', '8b7'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/env/active-directory/cheat-sheets/Attacking AD Command Cheat sheet',
                component: ComponentCreator('/env/active-directory/cheat-sheets/Attacking AD Command Cheat sheet', '933'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/env/active-directory/enumeration/external/Enumerating Password Policies',
                component: ComponentCreator('/env/active-directory/enumeration/external/Enumerating Password Policies', '6ec'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/env/active-directory/enumeration/external/External Enumeration',
                component: ComponentCreator('/env/active-directory/enumeration/external/External Enumeration', 'd5a'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/env/active-directory/enumeration/internal/Access Control Lists',
                component: ComponentCreator('/env/active-directory/enumeration/internal/Access Control Lists', '344'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/env/active-directory/enumeration/internal/Checklist',
                component: ComponentCreator('/env/active-directory/enumeration/internal/Checklist', '21b'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/env/active-directory/enumeration/internal/Domain Trusts',
                component: ComponentCreator('/env/active-directory/enumeration/internal/Domain Trusts', '0b6'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/env/active-directory/enumeration/internal/Privileged Access to Services',
                component: ComponentCreator('/env/active-directory/enumeration/internal/Privileged Access to Services', '2f8'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/env/active-directory/enumeration/internal/Security Controls',
                component: ComponentCreator('/env/active-directory/enumeration/internal/Security Controls', 'f95'),
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
                component: ComponentCreator('/misc/PowerShell Credential object', 'f56'),
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
                component: ComponentCreator('/pivoting/netsh', 'be6'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/pwn',
                component: ComponentCreator('/pwn', 'cb2'),
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
                component: ComponentCreator('/services/MSSQL', 'aa6'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/services/Remote Desktop',
                component: ComponentCreator('/services/Remote Desktop', '801'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/services/WinRM',
                component: ComponentCreator('/services/WinRM', 'f7d'),
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
                component: ComponentCreator('/tools/ADSI Edit', '77f'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/tools/BloodHound',
                component: ComponentCreator('/tools/BloodHound', '2a7'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/tools/Evil-WinRM',
                component: ComponentCreator('/tools/Evil-WinRM', 'a82'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/tools/Impacket/',
                component: ComponentCreator('/tools/Impacket/', '428'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/tools/Impacket/GetUserSPNs.py',
                component: ComponentCreator('/tools/Impacket/GetUserSPNs.py', 'dcf'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/tools/Impacket/lookupsid.py',
                component: ComponentCreator('/tools/Impacket/lookupsid.py', 'bb2'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/tools/Impacket/mssqlclient.py (Impacket)',
                component: ComponentCreator('/tools/Impacket/mssqlclient.py (Impacket)', 'd2e'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/tools/Impacket/psexec.py',
                component: ComponentCreator('/tools/Impacket/psexec.py', 'ccd'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/tools/Impacket/raiseChild.py',
                component: ComponentCreator('/tools/Impacket/raiseChild.py', 'bf9'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/tools/Impacket/secretsdump.py',
                component: ComponentCreator('/tools/Impacket/secretsdump.py', 'acf'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/tools/Impacket/ticketer.py',
                component: ComponentCreator('/tools/Impacket/ticketer.py', '183'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/tools/Kerbrute',
                component: ComponentCreator('/tools/Kerbrute', '4ca'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/tools/klist',
                component: ComponentCreator('/tools/klist', '9cc'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/tools/Mimikatz',
                component: ComponentCreator('/tools/Mimikatz', '12a'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/tools/netdom',
                component: ComponentCreator('/tools/netdom', 'ece'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/tools/PowerShell',
                component: ComponentCreator('/tools/PowerShell', 'ec9'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/tools/PowerView',
                component: ComponentCreator('/tools/PowerView', 'e3c'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/tools/rubeus',
                component: ComponentCreator('/tools/rubeus', '70a'),
                exact: true,
                sidebar: "PwnGuideSidebar"
              },
              {
                path: '/tools/SQLMap',
                component: ComponentCreator('/tools/SQLMap', 'e4d'),
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
