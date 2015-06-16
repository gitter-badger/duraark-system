#!/bin/sh

nscale sys compile duraark
nscale cont buildall latest process
nscale rev deploy head process
