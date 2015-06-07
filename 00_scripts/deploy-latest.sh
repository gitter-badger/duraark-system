#!/bin/sh

nscale sys compile duraark
nscale cont buildall latest development
nscale rev deploy head development
