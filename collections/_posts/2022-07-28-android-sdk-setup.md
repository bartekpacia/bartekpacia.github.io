---
layout: post
title: "Android SDK setup - my wa"
date: 2019-06-29 16:47:42 +0200
author: Bartek
published: false
---

I've always needed Android SDK, but my approach to it shifted from the "download
and forget what it is" into a more, err, mature approach.

When I was using Android Studio, I was much less experienced and didn't care at
all where the SDK is installed. Then, wherever I needed to, say, use `adb` in
the terminal, I had to embark on a journey to find it.

These

For who is this post:

- you need Android SDK, but don't want to install Android Studio or IntellJ

- you want to know what parts Android SDK consists of

### Downloading cmdline-tools

The official, recommended way to get Android SDK is to simply download Android
Studio from [developer.android.com/studio][studio] (You see? There's no
`/download`, there's `/studio`! They're really trying to shove Android Studio
down our throats!). But it's quite heavy, and most importantly – why should I
install something I won't use?

So on that page, instead of clicking "Download Android Studio", scroll down and
find the ["Command line tools only" section][cli_tools]. Download the version
for your OS.

Now, extract that zip and you'll get the `cmdline-tools` directory. Let's put
this extracted directory into `~/Downloads`, so that we'll be able to find it at
`~/Downloads/cmdline-tools`.

I'll be installing Android SDK into `~/androidsdk`, because that's where I like
having it.

```bash
$ mkdir ~/androisdk
```

Then create a directory for the command-line tools:

```bash
$ mkdir ~/androidsdk/cmdline-tools
$ mkdir ~/androidsdk/cmdline-tools/latest
```

Now we're ready to copy everything we from the `cmdline-tools` directory we
unzipped into the new directory:

```bash
$ cp -r ~/Downloads/cmdline-tools
```

The reason why I'm using `latest` is that you might want to install other
versions of the command line tools. [Google recommends doing it this way](path).

### Getting more stuff with sdkmanager

Now you've got yourself command-line tools. But that's about it. You still don't
have any build tools, system images, or an emulator.

To get them, you use a tool called [sdkmanager][sdkmanager]. It lets you
download everything you'll need.

Let's run it to make sure until this point, we've got everything right:

```
$ sdkmanager
```

You'll probably see something along the lines of:

```
zsh: command not found: sdkmanager
```

We're going to add the path where `sdkmanager` is located to [PATH][path_env].
Let's open your `.bashrc`, `.zshrc`, or whateverrc you're using and add this
line:

```bash
export ANDROID_HOME="$HOME/androidsdk"
export ANDROID_USER_HOME="$HOME/.config/android"
```

Reload your shell.

> To learn more about the environment variables used by Android SDK, see [this
> page][sdk_envs].

Now let's run `sdkmanager` again and let's download some useful stuff:

// TODO: define useful stuff

[studio]: https://developer.android.com/studio
[cli_tools]: https://developer.android.com/studio#command-tools
[path]: https://developer.android.com/studio/releases/cmdline-tools
[sdkmanager]: https://developer.android.com/studio/command-line/sdkmanager
[path_env]: https://en.wikipedia.org/wiki/PATH_(variable)
[sdk_envs]: https://developer.android.com/studio/command-line/variables
