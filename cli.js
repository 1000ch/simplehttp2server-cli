#!/usr/bin/env node
import {spawn} from 'node:child_process';
import process from 'node:process';
import simplehttp2server from 'simplehttp2server';

const input = process.argv.slice(2);

spawn(simplehttp2server, input, {
  stdio: 'inherit',
}).on('exit', process.exit);
