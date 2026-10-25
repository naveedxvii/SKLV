#!/bin/sh
JH=${JAVA_HOME:-$(dirname "$(dirname "$(readlink -f "$(which javac)")")")}
case "$(uname)" in Darwin) OS=darwin; EXT=dylib;; *) OS=linux; EXT=so;; esac
gcc -shared -fPIC -I"$JH/include" -I"$JH/include/$OS" year.c -o libyear.$EXT 2>/dev/null || echo "C step skipped (Java fallback used)"
javac Main.java && java -Djava.library.path=. Main
