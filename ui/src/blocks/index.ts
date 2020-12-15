import fs = require('fs');
import path = require('path');
import { Extension } from '../types';

export async function getToolBoxXml(extensions: Extension[]) {
  let toolBoxXml = '';

  toolBoxXml += '<xml>';

  if (extensions.indexOf('Web General') !== -1) {
    (await import('./web/imports/definitions')).default(Blockly.Blocks);
    (await import('./web/imports/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'web', 'imports', 'toolbox.xml'));

    (await import('./web/variables/definitions')).default(Blockly.Blocks);
    (await import('./web/variables/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'web', 'variables', 'toolbox.xml'));

    (await import('./web/statements/definitions')).default(Blockly.Blocks);
    (await import('./web/statements/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'web', 'statements', 'toolbox.xml'));

    (await import('./web/logic/definitions')).default(Blockly.Blocks);
    (await import('./web/logic/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'web', 'logic', 'toolbox.xml'));

    (await import('./web/lists/definitions')).default(Blockly.Blocks);
    (await import('./web/lists/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'web', 'lists', 'toolbox.xml'));

    (await import('./web/loops/definitions')).default(Blockly.Blocks);
    (await import('./web/loops/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'web', 'loops', 'toolbox.xml'));

    (await import('./web/definitions/definitions')).default(Blockly.Blocks);
    (await import('./web/definitions/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'web', 'definitions', 'toolbox.xml'));

    (await import('./web/math/definitions')).default(Blockly.Blocks);
    (await import('./web/math/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'web', 'math', 'toolbox.xml'));

    (await import('./web/turtle/definitions')).default(Blockly.Blocks);
    (await import('./web/turtle/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'web', 'turtle', 'toolbox.xml'));

    (await import('./web/graphs/definitions')).default(Blockly.Blocks);
    (await import('./web/graphs/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'web', 'graphs', 'toolbox.xml'));

    (await import('./web/random/definitions')).default(Blockly.Blocks);
    (await import('./web/random/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'web', 'random', 'toolbox.xml'));

    (await import('./web/processing/definitions')).default(Blockly.Blocks);
    (await import('./web/processing/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'web', 'processing', 'toolbox.xml'));

  }

  if (extensions.indexOf('CircuitPython General') !== -1) {
    (await import('./circuitpython/basic/definitions')).default(Blockly.Blocks);
    (await import('./circuitpython/basic/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'circuitpython', 'basic', 'toolbox.xml'));
    
    (await import('./microbit/variables/definitions')).default(Blockly.Blocks);
    (await import('./microbit/variables/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'microbit', 'variables', 'toolbox.xml'));

    (await import('./circuitpython/digital/definitions')).default(Blockly.Blocks);
    (await import('./circuitpython/digital/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'circuitpython', 'digital', 'toolbox.xml'));

    (await import('./circuitpython/analog/definitions')).default(Blockly.Blocks);
    (await import('./circuitpython/analog/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'circuitpython', 'analog', 'toolbox.xml'));

    (await import('./circuitpython/neopixel/definitions')).default(Blockly.Blocks);
    (await import('./circuitpython/neopixel/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'circuitpython', 'neopixel', 'toolbox.xml'));

    (await import('./circuitpython/touch/definitions')).default(Blockly.Blocks);
    (await import('./circuitpython/touch/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'circuitpython', 'touch', 'toolbox.xml'));

    (await import('./circuitpython/servo/definitions')).default(Blockly.Blocks);
    (await import('./circuitpython/servo/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'circuitpython', 'servo', 'toolbox.xml'));

    (await import('./circuitpython/audio/definitions')).default(Blockly.Blocks);
    (await import('./circuitpython/audio/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'circuitpython', 'audio', 'toolbox.xml'));

    (await import('./circuitpython/pwm/definitions')).default(Blockly.Blocks);
    (await import('./circuitpython/pwm/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'circuitpython', 'pwm', 'toolbox.xml'));

    (await import('./circuitpython/dotstar/definitions')).default(Blockly.Blocks);
    (await import('./circuitpython/dotstar/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'circuitpython', 'dotstar', 'toolbox.xml'));

    (await import('./circuitpython/advanced/definitions')).default(Blockly.Blocks);
    (await import('./circuitpython/advanced/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'circuitpython', 'advanced', 'toolbox.xml'));

    (await import('./circuitpython/cpx/definitions')).default(Blockly.Blocks);
    (await import('./circuitpython/cpx/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'circuitpython', 'cpx', 'toolbox.xml'));
  }

  if (extensions.indexOf('micro:bit General') !== -1) {
    (await import('./microbit/basic/definitions')).default(Blockly.Blocks);
    (await import('./microbit/basic/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'microbit', 'basic', 'toolbox.xml'));

    (await import('./microbit/variables/definitions')).default(Blockly.Blocks);
    (await import('./microbit/variables/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'microbit', 'variables', 'toolbox.xml'));

    (await import('./microbit/display/definitions')).default(Blockly.Blocks);
    (await import('./microbit/display/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'microbit', 'display', 'toolbox.xml'));

    (await import('./microbit/buttons/definitions')).default(Blockly.Blocks);
    (await import('./microbit/buttons/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'microbit', 'buttons', 'toolbox.xml'));

    (await import('./microbit/accelerometer/definitions')).default(Blockly.Blocks);
    (await import('./microbit/accelerometer/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'microbit', 'accelerometer', 'toolbox.xml'));

    (await import('./microbit/compass/definitions')).default(Blockly.Blocks);
    (await import('./microbit/compass/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'microbit', 'compass', 'toolbox.xml'));

    (await import('./microbit/radio/definitions')).default(Blockly.Blocks);
    (await import('./microbit/radio/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'microbit', 'radio', 'toolbox.xml'));

    (await import('./microbit/speech/definitions')).default(Blockly.Blocks);
    (await import('./microbit/speech/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'microbit', 'speech', 'toolbox.xml'));

    (await import('./microbit/music/definitions')).default(Blockly.Blocks);
    (await import('./microbit/music/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'microbit', 'music', 'toolbox.xml'));

    (await import('./microbit/microphone/definitions')).default(Blockly.Blocks);
    (await import('./microbit/microphone/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'microbit', 'microphone', 'toolbox.xml'));

    (await import('./microbit/neopixel/definitions')).default(Blockly.Blocks);
    (await import('./microbit/neopixel/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'microbit', 'neopixel', 'toolbox.xml'));

    (await import('./microbit/pins/definitions')).default(Blockly.Blocks);
    (await import('./microbit/pins/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'microbit', 'pins', 'toolbox.xml'));
  }

  if (extensions.indexOf('scrollbit') !== -1) {
    (await import('./microbit/scrollbit/definitions')).default(Blockly.Blocks);
    (await import('./microbit/scrollbit/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'microbit', 'scrollbit', 'toolbox.xml'));
  }

  if (extensions.indexOf('GiggleBot') !== -1) {
    (await import('./microbit/gigglebot/definitions')).default(Blockly.Blocks);
    (await import('./microbit/gigglebot/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'microbit', 'gigglebot', 'toolbox.xml'));
  }

  //Automated Extensions under here
  if (extensions.indexOf('edubit') !== -1) {
    (await import('./microbit/edubit/definitions')).default(Blockly.Blocks);
    (await import('./microbit/edubit/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'microbit', 'edubit', 'toolbox.xml'));
  }
  if (extensions.indexOf('DriveBit') !== -1) {
    (await import('./microbit/DriveBit/definitions')).default(Blockly.Blocks);
    (await import('./microbit/DriveBit/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'microbit', 'DriveBit', 'toolbox.xml'));
  }
  if (extensions.indexOf('BitBotXL') !== -1) {
    (await import('./microbit/BitBotXL/definitions')).default(Blockly.Blocks);
    (await import('./microbit/BitBotXL/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'microbit', 'BitBotXL', 'toolbox.xml'));
  }
  if (extensions.indexOf('MoveMini') !== -1) {
    (await import('./microbit/MoveMini/definitions')).default(Blockly.Blocks);
    (await import('./microbit/MoveMini/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'microbit', 'MoveMini', 'toolbox.xml'));
  }
  if (extensions.indexOf('Minibit') !== -1) {
    (await import('./microbit/Minibit/definitions')).default(Blockly.Blocks);
    (await import('./microbit/Minibit/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'microbit', 'Minibit', 'toolbox.xml'));
  }

  if (extensions.indexOf('Pi General') !== -1) {
    (await import('./pi/basic/definitions')).default(Blockly.Blocks);
    (await import('./pi/basic/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'pi', 'basic', 'toolbox.xml'));

    (await import('./pi/variables/definitions')).default(Blockly.Blocks);
    (await import('./pi/variables/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'pi', 'variables', 'toolbox.xml'));

    (await import('./pi/minecraft/definitions')).default(Blockly.Blocks);
    (await import('./pi/minecraft/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'pi', 'minecraft', 'toolbox.xml'));

    (await import('./pi/gpiozero/definitions')).default(Blockly.Blocks);
    (await import('./pi/gpiozero/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'pi', 'gpiozero', 'toolbox.xml'));

    (await import('./pi/sonicpi/definitions')).default(Blockly.Blocks);
    (await import('./pi/sonicpi/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'pi', 'sonicpi', 'toolbox.xml'));

    (await import('./pi/pimoroni/definitions')).default(Blockly.Blocks);
    (await import('./pi/pimoroni/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'pi', 'pimoroni', 'toolbox.xml'));

    (await import('./pi/requests/definitions')).default(Blockly.Blocks);
    (await import('./pi/requests/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'pi', 'requests', 'toolbox.xml'));

    (await import('./pi/sensehat/definitions')).default(Blockly.Blocks);
    (await import('./pi/sensehat/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'pi', 'sensehat', 'toolbox.xml'));

    (await import('./pi/bitio/definitions')).default(Blockly.Blocks);
    (await import('./pi/bitio/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'pi', 'bitio', 'toolbox.xml'));

    (await import('./pi/turtle/definitions')).default(Blockly.Blocks);
    (await import('./pi/turtle/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'pi', 'turtle', 'toolbox.xml'));

    (await import('./pi/picamera/definitions')).default(Blockly.Blocks);
    (await import('./pi/picamera/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'pi', 'picamera', 'toolbox.xml'));
  }

  toolBoxXml += '</xml>';

  return toolBoxXml;
}

export function getBeforeScript(extensions: Extension[]) {
  if (extensions.indexOf('scrollbit') !== -1) {
    return fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'microbit', 'scrollbit', 'scrollbit.py'));
  }
  if (extensions.indexOf('GiggleBot') !== -1) {
    return fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'microbit', 'gigglebot', 'gigglebot.py'));
  }
  if (extensions.indexOf('Minibit') !== -1) {
    return fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'microbit', 'Minibit', 'Minibit.py'));
  }
  //Automated Scripts under here
  if (extensions.indexOf('edubit') !== -1) {
    return fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'microbit', 'edubit', 'edubit.py')); 
  }
  if (extensions.indexOf('DriveBit') !== -1) {
    return fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'microbit', 'DriveBit', 'DriveBit.py')); 
  }
  if (extensions.indexOf('BitBotXL') !== -1) {
    return fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'microbit', 'BitBotXL', 'BitBotXL.py')); 
  }
  if (extensions.indexOf('MoveMini') !== -1) {
    return fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'microbit', 'MoveMini', 'MoveMini.py')); 
  }
}
