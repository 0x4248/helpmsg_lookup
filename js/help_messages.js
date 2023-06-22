add_command("ls", "List information about the files", `Usage: ls [OPTION]... [FILE]...<br>
List information about the FILEs (the current directory by default).<br>
Sort entries alphabetically if none of -cftuvSUX nor --sort is specified.<br>
<br>
Mandatory arguments to long options are mandatory for short options too.<br>
  -a, --all                  do not ignore entries starting with .<br>
  -A, --almost-all           do not list implied . and ..<br>
      --author               with -l, print the author of each file<br>
  -b, --escape               print C-style escapes for nongraphic characters<br>
      --block-size=SIZE      with -l, scale sizes by SIZE when printing them;<br>
                               e.g., '--block-size=M'; see SIZE format below<br>
  -B, --ignore-backups       do not list implied entries ending with ~<br>
  -c                         with -lt: sort by, and show, ctime (time of last<br>
                               modification of file status information);<br>
                               with -l: show ctime and sort by name;<br>
                               otherwise: sort by ctime, newest first<br>
  -C                         list entries by columns<br>
      --color[=WHEN]         colorize the output; WHEN can be 'always' (default<br>
                               if omitted), 'auto', or 'never'; more info below<br>
  -d, --directory            list directories themselves, not their contents<br>
  -D, --dired                generate output designed for Emacs' dired mode<br>
  -f                         do not sort, enable -aU, disable -ls --color<br>
  -F, --classify             append indicator (one of */=>@|) to entries<br>
      --file-type            likewise, except do not append '*'<br>
      --format=WORD          across -x, commas -m, horizontal -x, long -l,<br>
                               single-column -1, verbose -l, vertical -C<br>
      --full-time            like -l --time-style=full-iso<br>
  -g                         like -l, but do not list owner<br>
      --group-directories-first<br>
                             group directories before files;<br>
                               can be augmented with a --sort option, but any<br>
                               use of --sort=none (-U) disables grouping<br>
  -G, --no-group             in a long listing, don't print group names<br>
  -h, --human-readable       with -l and -s, print sizes like 1K 234M 2G etc.<br>
      --si                   likewise, but use powers of 1000 not 1024<br>
  -H, --dereference-command-line<br>
                             follow symbolic links listed on the command line<br>
      --dereference-command-line-symlink-to-dir<br>
                             follow each command line symbolic link<br>
                               that points to a directory<br>
      --hide=PATTERN         do not list implied entries matching shell PATTERN<br>
                               (overridden by -a or -A)<br>
      --hyperlink[=WHEN]     hyperlink file names; WHEN can be 'always'<br>
                               (default if omitted), 'auto', or 'never'<br>
      --indicator-style=WORD  append indicator with style WORD to entry names:<br>
                               none (default), slash (-p),<br>
                               file-type (--file-type), classify (-F)<br>
  -i, --inode                print the index number of each file<br>
  -I, --ignore=PATTERN       do not list implied entries matching shell PATTERN<br>
  -k, --kibibytes            default to 1024-byte blocks for disk usage;<br>
                               used only with -s and per directory totals<br>
  -l                         use a long listing format<br>
  -L, --dereference          when showing file information for a symbolic<br>
                               link, show information for the file the link<br>
                               references rather than for the link itself<br>
  -m                         fill width with a comma separated list of entries<br>
  -n, --numeric-uid-gid      like -l, but list numeric user and group IDs<br>
  -N, --literal              print entry names without quoting<br>
  -o                         like -l, but do not list group information<br>
  -p, --indicator-style=slash<br>
                             append / indicator to directories<br>
  -q, --hide-control-chars   print ? instead of nongraphic characters<br>
      --show-control-chars   show nongraphic characters as-is (the default,<br>
                               unless program is 'ls' and output is a terminal)<br>
  -Q, --quote-name           enclose entry names in double quotes<br>
      --quoting-style=WORD   use quoting style WORD for entry names:<br>
                               literal, locale, shell, shell-always,<br>
                               shell-escape, shell-escape-always, c, escape<br>
                               (overrides QUOTING_STYLE environment variable)<br>
  -r, --reverse              reverse order while sorting<br>
  -R, --recursive            list subdirectories recursively<br>
  -s, --size                 print the allocated size of each file, in blocks<br>
  -S                         sort by file size, largest first<br>
      --sort=WORD            sort by WORD instead of name: none (-U), size (-S),<br>
                               time (-t), version (-v), extension (-X)<br>
      --time=WORD            change the default of using modification times;<br>
                               access time (-u): atime, access, use;<br>
                               change time (-c): ctime, status;<br>
                               birth time: birth, creation;<br>
                             with -l, WORD determines which time to show;<br>
                             with --sort=time, sort by WORD (newest first)<br>
      --time-style=TIME_STYLE  time/date format with -l; see TIME_STYLE below<br>
  -t                         sort by time, newest first; see --time<br>
  -T, --tabsize=COLS         assume tab stops at each COLS instead of 8<br>
  -u                         with -lt: sort by, and show, access time;<br>
                               with -l: show access time and sort by name;<br>
                               otherwise: sort by access time, newest first<br>
  -U                         do not sort; list entries in directory order<br>
  -v                         natural sort of (version) numbers within text<br>
  -w, --width=COLS           set output width to COLS.  0 means no limit<br>
  -x                         list entries by lines instead of by columns<br>
  -X                         sort alphabetically by entry extension<br>
  -Z, --context              print any security context of each file<br>
  -1                         list one file per line.  Avoid '\n' with -q or -b<br>
      --help     display this help and exit<br>
      --version  output version information and exit<br>
<br>
The SIZE argument is an integer and optional unit (example: 10K is 10*1024).<br>
Units are K,M,G,T,P,E,Z,Y (powers of 1024) or KB,MB,... (powers of 1000).<br>
Binary prefixes can be used, too: KiB=K, MiB=M, and so on.<br>
<br>
The TIME_STYLE argument can be full-iso, long-iso, iso, locale, or +FORMAT.<br>
FORMAT is interpreted like in date(1).  If FORMAT is FORMAT1<newline>FORMAT2,<br>
then FORMAT1 applies to non-recent files and FORMAT2 to recent files.<br>
TIME_STYLE prefixed with 'posix-' takes effect only outside the POSIX locale.<br>
Also the TIME_STYLE environment variable sets the default style to use.<br>
<br>
Using color to distinguish file types is disabled both by default and<br>
with --color=never.  With --color=auto, ls emits color codes only when<br>
standard output is connected to a terminal.  The LS_COLORS environment<br>
variable can change the settings.  Use the dircolors command to set it.<br>
<br>
Exit status:<br>
 0  if OK,<br>
 1  if minor problems (e.g., cannot access subdirectory),<br>
 2  if serious trouble (e.g., cannot access command-line argument).<br>
<br>
GNU coreutils online help: <https://www.gnu.org/software/coreutils/><br>
Report any translation bugs to <https://translationproject.org/team/><br>
Full documentation <https://www.gnu.org/software/coreutils/ls><br>
or available locally via: info '(coreutils) ls invocation'<br>`);

add_command("rm", "Remove files (delete, unlink, and rmdir)", `Usage: rm [OPTION]... [FILE]...<br>
Remove (unlink) the FILE(s).<br>
<br>
  -f, --force           ignore nonexistent files and arguments, never prompt<br>
  -i                    prompt before every removal<br>
  -I                    prompt once before removing more than three files, or<br>
                          when removing recursively; less intrusive than -i,<br>
                          while still giving protection against most mistakes<br>
      --interactive[=WHEN]  prompt according to WHEN: never, once (-I), or<br>
                          always (-i); without WHEN, prompt always<br>
      --one-file-system  when removing a hierarchy recursively, skip any<br>
                          directory that is on a file system different from<br>
                          that of the corresponding command line argument<br>
      --no-preserve-root  do not treat '/' specially<br>
      --preserve-root[=all]  do not remove '/' (default);<br>
                              with 'all', reject any command line argument<br>
                              on a separate device from its parent<br>
  -r, -R, --recursive   remove directories and their contents recursively<br>
  -d, --dir             remove empty directories<br>
  -v, --verbose         explain what is being done<br>
      --help     display this help and exit<br>
      --version  output version information and exit<br>
<br>
By default, rm does not remove directories.  Use the --recursive (-r or -R)<br>
option to remove each listed directory, too, along with all of its contents.<br>
<br>
To remove a file whose name starts with a '-', for example '-foo',<br>
use one of these commands:<br>
  rm -- -foo<br>
<br>
  rm ./-foo<br>
<br>
Note that if you use rm to remove a file, it might be possible to recover<br>
some of its contents, given sufficient expertise and/or time.  For greater<br>
assurance that the contents are truly unrecoverable, consider using shred.<br>
<br>
GNU coreutils online help: <https://www.gnu.org/software/coreutils/><br>
Report any translation bugs to <https://translationproject.org/team/><br>
Full documentation <https://www.gnu.org/software/coreutils/rm><br>
or available locally via: info '(coreutils) rm invocation<br>`);

add_command("mkdir", "Create directories", `Usage: mkdir [OPTION]... DIRECTORY...<br>
Create the DIRECTORY(ies), if they do not already exist.<br>
<br>
Mandatory arguments to long options are mandatory for short options too.<br>
  -m, --mode=MODE   set file mode (as in chmod), not a=rwx - umask<br>
  -p, --parents     no error if existing, make parent directories as needed<br>
  -v, --verbose     print a message for each created directory<br>
  -Z                   set SELinux security context of each created directory<br>
                         to the default type<br>
      --context[=CTX]  like -Z, or if CTX is specified then set the SELinux<br>
                         or SMACK security context to CTX<br>
      --help     display this help and exit<br>
      --version  output version information and exit<br>
<br>
GNU coreutils online help: <https://www.gnu.org/software/coreutils/><br>
Report any translation bugs to <https://translationproject.org/team/><br>
Full documentation <https://www.gnu.org/software/coreutils/mkdir><br>
or available locally via: info '(coreutils) mkdir invocation'<br>`);

add_command("mv", "Move (rename) files", `Usage: mv [OPTION]... [-T] SOURCE DEST<br>
or:  mv [OPTION]... SOURCE... DIRECTORY<br>
or:  mv [OPTION]... -t DIRECTORY SOURCE...<br>
Rename SOURCE to DEST, or move SOURCE(s) to DIRECTORY.<br>
<br>
Mandatory arguments to long options are mandatory for short options too.<br>
    --backup[=CONTROL]       make a backup of each existing destination file<br>
-b                           like --backup but does not accept an argument<br>
-f, --force                  do not prompt before overwriting<br>
-i, --interactive            prompt before overwrite<br>
-n, --no-clobber             do not overwrite an existing file<br>
If you specify more than one of -i, -f, -n, only the final one takes effect.<br>
    --strip-trailing-slashes  remove any trailing slashes from each SOURCE<br>
                               argument<br>
-S, --suffix=SUFFIX          override the usual backup suffix<br>
-t, --target-directory=DIRECTORY  move all SOURCE arguments into DIRECTORY<br>
-T, --no-target-directory    treat DEST as a normal file<br>
-u, --update                 move only when the SOURCE file is newer<br>
                               than the destination file or when the<br>
                               destination file is missing<br>
-v, --verbose                explain what is being done<br>
-Z, --context                set SELinux security context of destination<br>
                               file to default type<br>
    --help     display this help and exit<br>
    --version  output version information and exit<br>
<br>
The backup suffix is '~', unless set with --suffix or SIMPLE_BACKUP_SUFFIX.<br>
The version control method may be selected via the --backup option or through<br>
the VERSION_CONTROL environment variable.  Here are the values:<br>
<br>
none, off       never make backups (even if --backup is given)<br>
numbered, t     make numbered backups<br>
existing, nil   numbered if numbered backups exist, simple otherwise<br>
simple, never   always make simple backups<br>
<br>
GNU coreutils online help: <https://www.gnu.org/software/coreutils/><br>
Report any translation bugs to <https://translationproject.org/team/><br>
Full documentation <https://www.gnu.org/software/coreutils/mv><br>
or available locally via: info '(coreutils) mv invocation'<br>`);

add_command("cp", "Copy files and directories", `Usage: cp [OPTION]... [-T] SOURCE DEST<br>
  or:  cp [OPTION]... SOURCE... DIRECTORY<br>
  or:  cp [OPTION]... -t DIRECTORY SOURCE...<br>
Copy SOURCE to DEST, or multiple SOURCE(s) to DIRECTORY.<br>
<br>
Mandatory arguments to long options are mandatory for short options too.<br>
  -a, --archive                same as -dR --preserve=all<br>
      --attributes-only        don't copy the file data, just the attributes<br>
      --backup[=CONTROL]       make a backup of each existing destination file<br>
  -b                           like --backup but does not accept an argument<br>
      --copy-contents          copy contents of special files when recursive<br>
  -d                           same as --no-dereference --preserve=links<br>
  -f, --force                  if an existing destination file cannot be<br>
                                 opened, remove it and try again (this option<br>
                                 is ignored when the -n option is also used)<br>
  -i, --interactive            prompt before overwrite (overrides a previous -n<br>
                                  option)<br>
  -H                           follow command-line symbolic links in SOURCE<br>
  -l, --link                   hard link files instead of copying<br>
  -L, --dereference            always follow symbolic links in SOURCE<br>
  -n, --no-clobber             do not overwrite an existing file (overrides<br>
                                 a previous -i option)<br>
  -P, --no-dereference         never follow symbolic links in SOURCE<br>
  -p                           same as --preserve=mode,ownership,timestamps<br>
      --preserve[=ATTR_LIST]   preserve the specified attributes (default:<br>
                                 mode,ownership,timestamps), if possible<br>
                                 additional attributes: context, links, xattr,<br>
                                 all<br>
      --no-preserve=ATTR_LIST  don't preserve the specified attributes<br>
      --parents                use full source file name under DIRECTORY<br>
  -R, -r, --recursive          copy directories recursively<br>
      --reflink[=WHEN]         control clone/CoW copies. See below<br>
      --remove-destination     remove each existing destination file before<br>
                                 attempting to open it (contrast with --force)<br>
      --sparse=WHEN            control creation of sparse files. See below<br>
      --strip-trailing-slashes  remove any trailing slashes from each SOURCE<br>
                                 argument<br>
  -s, --symbolic-link          make symbolic links instead of copying<br>
  -S, --suffix=SUFFIX          override the usual backup suffix<br>
  -t, --target-directory=DIRECTORY  copy all SOURCE arguments into DIRECTORY<br>
  -T, --no-target-directory    treat DEST as a normal file<br>
  -u, --update                 copy only when the SOURCE file is newer<br>
                                 than the destination file or when the<br>
                                 destination file is missing<br>
  -v, --verbose                explain what is being done<br>
  -x, --one-file-system        stay on this file system<br>
  -Z                           set SELinux security context of destination<br>
                                 file to default type<br>
      --context[=CTX]          like -Z, or if CTX is specified then set the<br>
                                 SELinux or SMACK security context to CTX<br>
      --help     display this help and exit<br>
      --version  output version information and exit<br>
<br>
By default, sparse SOURCE files are detected by a crude heuristic and the<br>
corresponding DEST file is made sparse as well.  That is the behavior<br>
selected by --sparse=auto.  Specify --sparse=always to create a sparse DEST<br>
file whenever the SOURCE file contains a long enough sequence of zero bytes.<br>
Use --sparse=never to inhibit creation of sparse files.<br>
<br>
When --reflink[=always] is specified, perform a lightweight copy, where the<br>
data blocks are copied only when modified.  If this is not possible the copy<br>
fails, or if --reflink=auto is specified, fall back to a standard copy.<br>
Use --reflink=never to ensure a standard copy is performed.<br>
<br>
The backup suffix is '~', unless set with --suffix or SIMPLE_BACKUP_SUFFIX.<br>
The version control method may be selected via the --backup option or through<br>
the VERSION_CONTROL environment variable.  Here are the values:<br>
<br>
  none, off       never make backups (even if --backup is given)<br>
  numbered, t     make numbered backups<br>
  existing, nil   numbered if numbered backups exist, simple otherwise<br>
  simple, never   always make simple backups<br>
<br>
As a special case, cp makes a backup of SOURCE when the force and backup<br>
options are given and SOURCE and DEST are the same name for an existing,<br>
regular file.<br>
<br>
GNU coreutils online help: <https://www.gnu.org/software/coreutils/><br>
Report any translation bugs to <https://translationproject.org/team/><br>
Full documentation <https://www.gnu.org/software/coreutils/cp><br>
or available locally via: info '(coreutils) cp invocation'<br>`);