# BBS and ANSI Art: The Underground Digital Art Scene

## Origins and Development (1980s-1990s)

In the early 1980s, users of IBM PC compatible computers began experimenting with creating simple pictures and designs using only the 255 characters within the Extended ASCII character set, specifically known as **code page 437** (CP437), created by IBM. 

Modems and networking technology allowed computer users to communicate with each other over **bulletin board systems (BBSes)**. The operators of these BBSes used ASCII art to enhance the aesthetic appearance of their systems. As a result, a "scene" of artists arose to fill the need for original art to distinguish one BBS from another.

ANSI art is a product of the BBS scene of the 1980s and 1990s. It's a special form of computer art that takes advantage of the colors and characters available on PCs running MS-DOS.

## The Underground Scene

The ANSI art scene had deep roots in the underground computer culture of the era, with strong affiliations to:

- **Hacker communities**
- **Software piracy (warez) organizations**
- **Demoscene groups**

As early demoscene groups were organized by cracktros coders, artscene members were often found designing the .nfo files detailing warez releases. Much of the ANSI art provided for warez BBSes was drawn by future members of the artscene.

ANSI art flourished within these underground communities, where artists could share their work and collaborate with others. BBS systems allowed users to upload and download ANSI art files, creating a vibrant and supportive community of artists and enthusiasts.

## Major Art Groups

Major art groups emerged to organize and showcase this underground art form:

- **ACiD** (ANSI Creators in Demand)
- **iCE** (Insane Creators Enterprises)

Beginning in June 1992, these groups would release their work in monthly **"ARTPACKS"** - collections of ASCII art submitted by the group's various members, along with news and membership lists. These artpacks were then spread far and wide by BBS users through a courier system.

## Technical Aspects

### ANSI Escape Sequences

ANSI escape sequences are a standard for in-band signaling to control:
- Cursor location
- Color
- Font styling
- Other options on video text terminals

#### Basic Structure
- Start with escape character: `\x1b`, `\033`, `\u001b`, or `\e`
- Followed by Control Sequence Introducer (CSI): `[`
- Then command parameters and letter

#### Color Codes

**Foreground Colors (30-37):**
- 30: Black
- 31: Red
- 32: Green
- 33: Yellow
- 34: Blue
- 35: Magenta
- 36: Cyan
- 37: White

**Background Colors (40-47):**
- Same color scheme as foreground, but ranges from 40-47

**Bright/Intense versions:** Add 60 to the base value (90-97 for foreground, 100-107 for background)

### CP437 Character Set

Code page 437 includes:
- Standard ASCII characters (32-126)
- Extended characters (128-255)
- Special graphical symbols
- Box-drawing characters
- Shade blocks: ░ (light), ▒ (medium), ▓ (dark), █ (full)

Key block characters used in ANSI art:
- Characters #176-178: Shade blocks
- Characters #219-223: Block elements
- Characters #179-218: Box drawing characters

## Uses Throughout a BBS

ANSI art was used extensively across BBS systems:

1. **Welcome/Login Screens**: Spectacular images greeting users upon connection
2. **Menus**: Bright, colorful navigation systems
3. **Games**: TradeWars 2002 and Legend of the Red Dragon (LoRD) used ANSI animations
4. **BBS Advertisements**: Cool-looking ads to attract new users
5. **System Prompts**: Themed decorations throughout the BBS
6. **Door Game Title Screens**: Atmospheric illustrations for games

## Software Tools

### Creation Tools
- **ANSIdraw** (1985): The earliest known specialized ANSI editor
- **TheDraw** (1986): Created by Ian E. Davis, became the most popular editor
  - Included variety of "fonts" (large letters from box/block characters)
  - Transition animations (dissolve, clock)
  - Considerably simplified ANSI art creation
- **ACiDDraw**: More sophisticated program for dedicated artists
- **PabloDraw**: Currently maintained modern ANSI editor

## Peak Popularity

During the late 1980s and early 1990s, most BBSes used ANSI for elaborate welcome screens and colorized menus. ANSI support became a sought-after feature in terminal client programs. The popularity spawned an entire BBS "artscene" subculture.

### Historical Milestones
- **1970s**: ANSI sequences introduced to replace vendor-specific sequences
- **1978**: Digital VT100 - first popular video terminal to support these sequences
- **1979**: ANSI adopted ANSI X3.64 standard
- **1986**: TheDraw released, revolutionizing ANSI art creation
- **1992**: Monthly artpack releases begin

## Distribution System

Prior to internet popularity in the 1990s, the most efficient distribution method was via a **courier system**. Both the warez scene and artscene utilized this system. Warez couriers often distributed monthly artpacks alongside software.

## Decline and Legacy

The rise of the Internet in the late 1990s caused the decline of BBSes and thus the need for ANSI/ASCII art. However:

- Some groups from the 1990s still exist today
- Art is now primarily distributed using the internet
- Archives preserve this underground art form
- Small quantities of ANSI art are still being produced

### Modern Archives and Resources

- **16colo.rs**: Archive of ANSI/ASCII art, preserving artpacks from early 1990s to present
- **artscene.textfiles.com**: Jason Scott's compilation of BBS screens
  - `/ansi/welcomes/`: Welcome screens collection
  - `/ansi/bbs/`: General BBS art
- **ANSIGARDEN**: Collection of BBS themes and ANSI art screens

## Cultural Impact

The BBS ANSI art scene represents a unique underground digital art movement that:
- Flourished in the pre-web era
- Combined technical skill with creative expression
- Worked within constraints of text-based terminals
- Maintained strong connections to hacker and warez scenes
- Created a distinctive aesthetic that influenced early internet culture
- Established communities and collaborative practices that predated modern online art communities

## Key Characteristics of BBS Culture

1. **Community-driven**: Artists collaborated and competed in groups
2. **Technical constraints as creative catalyst**: Limited colors and characters sparked innovation
3. **Underground nature**: Connection to hacker/warez scenes gave it rebellious edge
4. **Monthly release cycles**: Regular artpack releases created anticipation
5. **Competitive spirit**: Groups competed for best artists and releases
6. **Preservation efforts**: Modern archives maintain this digital heritage

The ANSI art and BBS scene represents an important chapter in digital art history, demonstrating how technical limitations can foster creativity and how underground communities can develop distinctive aesthetic movements that influence broader digital culture.