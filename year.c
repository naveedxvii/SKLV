#include <jni.h>
#include <time.h>
/* Returns the current year for Main.year() */
JNIEXPORT jint JNICALL Java_Main_year(JNIEnv *env, jclass cls) {
    time_t t = time(0);
    return gmtime(&t)->tm_year + 1900;
}
