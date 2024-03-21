import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as e,b as a}from"./app-ef0b4d9d.js";const i={},l=a(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>目前，Ansible可以在安装了Python 2(版本2.7)或Python 3(版本3.5或更高)的任何机器上运行，</p><p>Fedora：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> dnf <span class="token function">install</span> ansible
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>RHEL：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> ansible
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>CentOS：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> epel-release
<span class="token function">sudo</span> yum <span class="token function">install</span> ansible
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Ubuntu:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> software-properties-common
<span class="token function">sudo</span> add-apt-repository <span class="token parameter variable">--yes</span> <span class="token parameter variable">--update</span> ppa:ansible/ansible
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> ansible
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Debian：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>deb http://ppa.launchpad.net/ansible/ansible/ubuntu trusty main
<span class="token function">sudo</span> apt-key adv <span class="token parameter variable">--keyserver</span> keyserver.ubuntu.com --recv-keys 93C4A3FD7BB9C367
<span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> ansible
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装指定版本的ansible:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s/archive.ubuntu.com/mirrors.aliyun.com/g&quot;</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">grep</span> archive.ubuntu.com <span class="token parameter variable">-rl</span> /etc/apt/sources.list<span class="token variable">\`</span></span>  <span class="token operator">&amp;&amp;</span> <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s/security.ubuntu.com/mirrors.aliyun.com/g&quot;</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">grep</span> security.ubuntu.com <span class="token parameter variable">-rl</span> /etc/apt/sources.list<span class="token variable">\`</span></span> <span class="token operator">&amp;&amp;</span>  <span class="token function">apt-get</span> update
 
add-apt-repository ppa:deadsnakes/ppa
<span class="token function">apt</span> <span class="token function">install</span> python3.8
 
<span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> python3-pip

<span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> software-properties-common

pip3 <span class="token function">install</span> <span class="token assign-left variable">ansible</span><span class="token operator">==</span><span class="token number">2.10</span>.7 <span class="token parameter variable">-i</span> http://mirrors.aliyun.com/pypi/simple --trusted-host mirrors.aliyun.com

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>验证是否安装成功：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> ansible <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2><p>通过安装包管理工具安装的ansible文件在/etc/ansible目录下，</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment"># config file for ansible -- https://ansible.com/</span>
<span class="token comment"># ===============================================</span>

<span class="token comment"># nearly all parameters can be overridden in ansible-playbook</span>
<span class="token comment"># or with command line flags. ansible will read ANSIBLE_CONFIG,</span>
<span class="token comment"># ansible.cfg in the current working directory, .ansible.cfg in</span>
<span class="token comment"># the home directory or /etc/ansible/ansible.cfg, whichever it</span>
<span class="token comment"># finds first</span>

[defaults]

<span class="token comment"># some basic default values...</span>

<span class="token comment">#inventory      = /etc/ansible/hosts</span>
<span class="token comment">#library        = /usr/share/my_modules/</span>
<span class="token comment">#module_utils   = /usr/share/my_module_utils/</span>
<span class="token comment">#remote_tmp     = ~/.ansible/tmp</span>
<span class="token comment">#local_tmp      = ~/.ansible/tmp</span>
<span class="token comment">#plugin_filters_cfg = /etc/ansible/plugin_filters.yml</span>
<span class="token comment">#forks          = 5</span>
<span class="token comment">#poll_interval  = 15</span>
<span class="token comment">#sudo_user      = root</span>
<span class="token comment">#ask_sudo_pass = True</span>
<span class="token comment">#ask_pass      = True</span>
<span class="token comment">#transport      = smart</span>
<span class="token comment">#remote_port    = 22</span>
<span class="token comment">#module_lang    = C</span>
<span class="token comment">#module_set_locale = False</span>

<span class="token comment"># plays will gather facts by default, which contain information about</span>
<span class="token comment"># the remote system.</span>
<span class="token comment">#</span>
<span class="token comment"># smart - gather by default, but don&#39;t regather if already gathered</span>
<span class="token comment"># implicit - gather by default, turn off with gather_facts: False</span>
<span class="token comment"># explicit - do not gather by default, must say gather_facts: True</span>
<span class="token comment">#gathering = implicit</span>

<span class="token comment"># This only affects the gathering done by a play&#39;s gather_facts directive,</span>
<span class="token comment"># by default gathering retrieves all facts subsets</span>
<span class="token comment"># all - gather all subsets</span>
<span class="token comment"># network - gather min and network facts</span>
<span class="token comment"># hardware - gather hardware facts (longest facts to retrieve)</span>
<span class="token comment"># virtual - gather min and virtual facts</span>
<span class="token comment"># facter - import facts from facter</span>
<span class="token comment"># ohai - import facts from ohai</span>
<span class="token comment"># You can combine them using comma (ex: network,virtual)</span>
<span class="token comment"># You can negate them using ! (ex: !hardware,!facter,!ohai)</span>
<span class="token comment"># A minimal set of facts is always gathered.</span>
<span class="token comment">#gather_subset = all</span>

<span class="token comment"># some hardware related facts are collected</span>
<span class="token comment"># with a maximum timeout of 10 seconds. This</span>
<span class="token comment"># option lets you increase or decrease that</span>
<span class="token comment"># timeout to something more suitable for the</span>
<span class="token comment"># environment.</span>
<span class="token comment"># gather_timeout = 10</span>

<span class="token comment"># Ansible facts are available inside the ansible_facts.* dictionary</span>
<span class="token comment"># namespace. This setting maintains the behaviour which was the default prior</span>
<span class="token comment"># to 2.5, duplicating these variables into the main namespace, each with a</span>
<span class="token comment"># prefix of &#39;ansible_&#39;.</span>
<span class="token comment"># This variable is set to True by default for backwards compatibility. It</span>
<span class="token comment"># will be changed to a default of &#39;False&#39; in a future release.</span>
<span class="token comment"># ansible_facts.</span>
<span class="token comment"># inject_facts_as_vars = True</span>

<span class="token comment"># additional paths to search for roles in, colon separated</span>
<span class="token comment">#roles_path    = /etc/ansible/roles</span>

<span class="token comment"># uncomment this to disable SSH key host checking</span>
<span class="token comment">#host_key_checking = False</span>

<span class="token comment"># change the default callback, you can only have one &#39;stdout&#39; type  enabled at a time.</span>
<span class="token comment">#stdout_callback = skippy</span>


<span class="token comment">## Ansible ships with some plugins that require whitelisting,</span>
<span class="token comment">## this is done to avoid running all of a type by default.</span>
<span class="token comment">## These setting lists those that you want enabled for your system.</span>
<span class="token comment">## Custom plugins should not need this unless plugin author specifies it.</span>

<span class="token comment"># enable callback plugins, they can output to stdout but cannot be &#39;stdout&#39; type.</span>
<span class="token comment">#callback_whitelist = timer, mail</span>

<span class="token comment"># Determine whether includes in tasks and handlers are &quot;static&quot; by</span>
<span class="token comment"># default. As of 2.0, includes are dynamic by default. Setting these</span>
<span class="token comment"># values to True will make includes behave more like they did in the</span>
<span class="token comment"># 1.x versions.</span>
<span class="token comment">#task_includes_static = False</span>
<span class="token comment">#handler_includes_static = False</span>

<span class="token comment"># Controls if a missing handler for a notification event is an error or a warning</span>
<span class="token comment">#error_on_missing_handler = True</span>

<span class="token comment"># change this for alternative sudo implementations</span>
<span class="token comment">#sudo_exe = sudo</span>

<span class="token comment"># What flags to pass to sudo</span>
<span class="token comment"># WARNING: leaving out the defaults might create unexpected behaviours</span>
<span class="token comment">#sudo_flags = -H -S -n</span>

<span class="token comment"># SSH timeout</span>
<span class="token comment">#timeout = 10</span>

<span class="token comment"># default user to use for playbooks if user is not specified</span>
<span class="token comment"># (/usr/bin/ansible will use current user as default)</span>
<span class="token comment">#remote_user = root</span>

<span class="token comment"># logging is off by default unless this path is defined</span>
<span class="token comment"># if so defined, consider logrotate</span>
<span class="token comment">#log_path = /var/log/ansible.log</span>

<span class="token comment"># default module name for /usr/bin/ansible</span>
<span class="token comment">#module_name = command</span>

<span class="token comment"># use this shell for commands executed under sudo</span>
<span class="token comment"># you may need to change this to bin/bash in rare instances</span>
<span class="token comment"># if sudo is constrained</span>
<span class="token comment">#executable = /bin/sh</span>

<span class="token comment"># if inventory variables overlap, does the higher precedence one win</span>
<span class="token comment"># or are hash values merged together?  The default is &#39;replace&#39; but</span>
<span class="token comment"># this can also be set to &#39;merge&#39;.</span>
<span class="token comment">#hash_behaviour = replace</span>

<span class="token comment"># by default, variables from roles will be visible in the global variable</span>
<span class="token comment"># scope. To prevent this, the following option can be enabled, and only</span>
<span class="token comment"># tasks and handlers within the role will see the variables there</span>
<span class="token comment">#private_role_vars = yes</span>

<span class="token comment"># list any Jinja2 extensions to enable here:</span>
<span class="token comment">#jinja2_extensions = jinja2.ext.do,jinja2.ext.i18n</span>

<span class="token comment"># if set, always use this private key file for authentication, same as</span>
<span class="token comment"># if passing --private-key to ansible or ansible-playbook</span>
<span class="token comment">#private_key_file = /path/to/file</span>

<span class="token comment"># If set, configures the path to the Vault password file as an alternative to</span>
<span class="token comment"># specifying --vault-password-file on the command line.</span>
<span class="token comment">#vault_password_file = /path/to/vault_password_file</span>

<span class="token comment"># format of string {{ ansible_managed }} available within Jinja2</span>
<span class="token comment"># templates indicates to users editing templates files will be replaced.</span>
<span class="token comment"># replacing {file}, {host} and {uid} and strftime codes with proper values.</span>
<span class="token comment">#ansible_managed = Ansible managed: {file} modified on %Y-%m-%d %H:%M:%S by {uid} on {host}</span>
<span class="token comment"># {file}, {host}, {uid}, and the timestamp can all interfere with idempotence</span>
<span class="token comment"># in some situations so the default is a static string:</span>
<span class="token comment">#ansible_managed = Ansible managed</span>

<span class="token comment"># by default, ansible-playbook will display &quot;Skipping [host]&quot; if it determines a task</span>
<span class="token comment"># should not be run on a host.  Set this to &quot;False&quot; if you don&#39;t want to see these &quot;Skipping&quot;</span>
<span class="token comment"># messages. NOTE: the task header will still be shown regardless of whether or not the</span>
<span class="token comment"># task is skipped.</span>
<span class="token comment">#display_skipped_hosts = True</span>

<span class="token comment"># by default, if a task in a playbook does not include a name: field then</span>
<span class="token comment"># ansible-playbook will construct a header that includes the task&#39;s action but</span>
<span class="token comment"># not the task&#39;s args.  This is a security feature because ansible cannot know</span>
<span class="token comment"># if the *module* considers an argument to be no_log at the time that the</span>
<span class="token comment"># header is printed.  If your environment doesn&#39;t have a problem securing</span>
<span class="token comment"># stdout from ansible-playbook (or you have manually specified no_log in your</span>
<span class="token comment"># playbook on all of the tasks where you have secret information) then you can</span>
<span class="token comment"># safely set this to True to get more informative messages.</span>
<span class="token comment">#display_args_to_stdout = False</span>

<span class="token comment"># by default (as of 1.3), Ansible will raise errors when attempting to dereference</span>
<span class="token comment"># Jinja2 variables that are not set in templates or action lines. Uncomment this line</span>
<span class="token comment"># to revert the behavior to pre-1.3.</span>
<span class="token comment">#error_on_undefined_vars = False</span>

<span class="token comment"># by default (as of 1.6), Ansible may display warnings based on the configuration of the</span>
<span class="token comment"># system running ansible itself. This may include warnings about 3rd party packages or</span>
<span class="token comment"># other conditions that should be resolved if possible.</span>
<span class="token comment"># to disable these warnings, set the following value to False:</span>
<span class="token comment">#system_warnings = True</span>

<span class="token comment"># by default (as of 1.4), Ansible may display deprecation warnings for language</span>
<span class="token comment"># features that should no longer be used and will be removed in future versions.</span>
<span class="token comment"># to disable these warnings, set the following value to False:</span>
<span class="token comment">#deprecation_warnings = True</span>

<span class="token comment"># (as of 1.8), Ansible can optionally warn when usage of the shell and</span>
<span class="token comment"># command module appear to be simplified by using a default Ansible module</span>
<span class="token comment"># instead.  These warnings can be silenced by adjusting the following</span>
<span class="token comment"># setting or adding warn=yes or warn=no to the end of the command line</span>
<span class="token comment"># parameter string.  This will for example suggest using the git module</span>
<span class="token comment"># instead of shelling out to the git command.</span>
<span class="token comment"># command_warnings = False</span>


<span class="token comment"># set plugin path directories here, separate with colons</span>
<span class="token comment">#action_plugins     = /usr/share/ansible/plugins/action</span>
<span class="token comment">#become_plugins     = /usr/share/ansible/plugins/become</span>
<span class="token comment">#cache_plugins      = /usr/share/ansible/plugins/cache</span>
<span class="token comment">#callback_plugins   = /usr/share/ansible/plugins/callback</span>
<span class="token comment">#connection_plugins = /usr/share/ansible/plugins/connection</span>
<span class="token comment">#lookup_plugins     = /usr/share/ansible/plugins/lookup</span>
<span class="token comment">#inventory_plugins  = /usr/share/ansible/plugins/inventory</span>
<span class="token comment">#vars_plugins       = /usr/share/ansible/plugins/vars</span>
<span class="token comment">#filter_plugins     = /usr/share/ansible/plugins/filter</span>
<span class="token comment">#test_plugins       = /usr/share/ansible/plugins/test</span>
<span class="token comment">#terminal_plugins   = /usr/share/ansible/plugins/terminal</span>
<span class="token comment">#strategy_plugins   = /usr/share/ansible/plugins/strategy</span>


<span class="token comment"># by default, ansible will use the &#39;linear&#39; strategy but you may want to try</span>
<span class="token comment"># another one</span>
<span class="token comment">#strategy = free</span>

<span class="token comment"># by default callbacks are not loaded for /bin/ansible, enable this if you</span>
<span class="token comment"># want, for example, a notification or logging callback to also apply to</span>
<span class="token comment"># /bin/ansible runs</span>
<span class="token comment">#bin_ansible_callbacks = False</span>


<span class="token comment"># don&#39;t like cows?  that&#39;s unfortunate.</span>
<span class="token comment"># set to 1 if you don&#39;t want cowsay support or export ANSIBLE_NOCOWS=1</span>
<span class="token comment">#nocows = 1</span>

<span class="token comment"># set which cowsay stencil you&#39;d like to use by default. When set to &#39;random&#39;,</span>
<span class="token comment"># a random stencil will be selected for each task. The selection will be filtered</span>
<span class="token comment"># against the \`cow_whitelist\` option below.</span>
<span class="token comment">#cow_selection = default</span>
<span class="token comment">#cow_selection = random</span>

<span class="token comment"># when using the &#39;random&#39; option for cowsay, stencils will be restricted to this list.</span>
<span class="token comment"># it should be formatted as a comma-separated list with no spaces between names.</span>
<span class="token comment"># NOTE: line continuations here are for formatting purposes only, as the INI parser</span>
<span class="token comment">#       in python does not support them.</span>
<span class="token comment">#cow_whitelist=bud-frogs,bunny,cheese,daemon,default,dragon,elephant-in-snake,elephant,eyes,\\</span>
<span class="token comment">#              hellokitty,kitty,luke-koala,meow,milk,moofasa,moose,ren,sheep,small,stegosaurus,\\</span>
<span class="token comment">#              stimpy,supermilker,three-eyes,turkey,turtle,tux,udder,vader-koala,vader,www</span>

<span class="token comment"># don&#39;t like colors either?</span>
<span class="token comment"># set to 1 if you don&#39;t want colors, or export ANSIBLE_NOCOLOR=1</span>
<span class="token comment">#nocolor = 1</span>

<span class="token comment"># if set to a persistent type (not &#39;memory&#39;, for example &#39;redis&#39;) fact values</span>
<span class="token comment"># from previous runs in Ansible will be stored.  This may be useful when</span>
<span class="token comment"># wanting to use, for example, IP information from one group of servers</span>
<span class="token comment"># without having to talk to them in the same playbook run to get their</span>
<span class="token comment"># current IP information.</span>
<span class="token comment">#fact_caching = memory</span>

<span class="token comment">#This option tells Ansible where to cache facts. The value is plugin dependent.</span>
<span class="token comment">#For the jsonfile plugin, it should be a path to a local directory.</span>
<span class="token comment">#For the redis plugin, the value is a host:port:database triplet: fact_caching_connection = localhost:6379:0</span>

<span class="token comment">#fact_caching_connection=/tmp</span>



<span class="token comment"># retry files</span>
<span class="token comment"># When a playbook fails a .retry file can be created that will be placed in ~/</span>
<span class="token comment"># You can enable this feature by setting retry_files_enabled to True</span>
<span class="token comment"># and you can change the location of the files by setting retry_files_save_path</span>

<span class="token comment">#retry_files_enabled = False</span>
<span class="token comment">#retry_files_save_path = ~/.ansible-retry</span>

<span class="token comment"># squash actions</span>
<span class="token comment"># Ansible can optimise actions that call modules with list parameters</span>
<span class="token comment"># when looping. Instead of calling the module once per with_ item, the</span>
<span class="token comment"># module is called once with all items at once. Currently this only works</span>
<span class="token comment"># under limited circumstances, and only with parameters named &#39;name&#39;.</span>
<span class="token comment">#squash_actions = apk,apt,dnf,homebrew,pacman,pkgng,yum,zypper</span>

<span class="token comment"># prevents logging of task data, off by default</span>
<span class="token comment">#no_log = False</span>

<span class="token comment"># prevents logging of tasks, but only on the targets, data is still logged on the master/controller</span>
<span class="token comment">#no_target_syslog = False</span>

<span class="token comment"># controls whether Ansible will raise an error or warning if a task has no</span>
<span class="token comment"># choice but to create world readable temporary files to execute a module on</span>
<span class="token comment"># the remote machine.  This option is False by default for security.  Users may</span>
<span class="token comment"># turn this on to have behaviour more like Ansible prior to 2.1.x.  See</span>
<span class="token comment"># https://docs.ansible.com/ansible/become.html#becoming-an-unprivileged-user</span>
<span class="token comment"># for more secure ways to fix this than enabling this option.</span>
<span class="token comment">#allow_world_readable_tmpfiles = False</span>

<span class="token comment"># controls the compression level of variables sent to</span>
<span class="token comment"># worker processes. At the default of 0, no compression</span>
<span class="token comment"># is used. This value must be an integer from 0 to 9.</span>
<span class="token comment">#var_compression_level = 9</span>

<span class="token comment"># controls what compression method is used for new-style ansible modules when</span>
<span class="token comment"># they are sent to the remote system.  The compression types depend on having</span>
<span class="token comment"># support compiled into both the controller&#39;s python and the client&#39;s python.</span>
<span class="token comment"># The names should match with the python Zipfile compression types:</span>
<span class="token comment"># * ZIP_STORED (no compression. available everywhere)</span>
<span class="token comment"># * ZIP_DEFLATED (uses zlib, the default)</span>
<span class="token comment"># These values may be set per host via the ansible_module_compression inventory</span>
<span class="token comment"># variable</span>
<span class="token comment">#module_compression = &#39;ZIP_DEFLATED&#39;</span>

<span class="token comment"># This controls the cutoff point (in bytes) on --diff for files</span>
<span class="token comment"># set to 0 for unlimited (RAM may suffer!).</span>
<span class="token comment">#max_diff_size = 1048576</span>

<span class="token comment"># This controls how ansible handles multiple --tags and --skip-tags arguments</span>
<span class="token comment"># on the CLI.  If this is True then multiple arguments are merged together.  If</span>
<span class="token comment"># it is False, then the last specified argument is used and the others are ignored.</span>
<span class="token comment"># This option will be removed in 2.8.</span>
<span class="token comment">#merge_multiple_cli_flags = True</span>

<span class="token comment"># Controls showing custom stats at the end, off by default</span>
<span class="token comment">#show_custom_stats = True</span>

<span class="token comment"># Controls which files to ignore when using a directory as inventory with</span>
<span class="token comment"># possibly multiple sources (both static and dynamic)</span>
<span class="token comment">#inventory_ignore_extensions = ~, .orig, .bak, .ini, .cfg, .retry, .pyc, .pyo</span>

<span class="token comment"># This family of modules use an alternative execution path optimized for network appliances</span>
<span class="token comment"># only update this setting if you know how this works, otherwise it can break module execution</span>
<span class="token comment">#network_group_modules=eos, nxos, ios, iosxr, junos, vyos</span>

<span class="token comment"># When enabled, this option allows lookups (via variables like {{lookup(&#39;foo&#39;)}} or when used as</span>
<span class="token comment"># a loop with \`with_foo\`) to return data that is not marked &quot;unsafe&quot;. This means the data may contain</span>
<span class="token comment"># jinja2 templating language which will be run through the templating engine.</span>
<span class="token comment"># ENABLING THIS COULD BE A SECURITY RISK</span>
<span class="token comment">#allow_unsafe_lookups = False</span>

<span class="token comment"># set default errors for all plays</span>
<span class="token comment">#any_errors_fatal = False</span>

[inventory]
<span class="token comment"># enable inventory plugins, default: &#39;host_list&#39;, &#39;script&#39;, &#39;auto&#39;, &#39;yaml&#39;, &#39;ini&#39;, &#39;toml&#39;</span>
<span class="token comment">#enable_plugins = host_list, virtualbox, yaml, constructed</span>

<span class="token comment"># ignore these extensions when parsing a directory as inventory source</span>
<span class="token comment">#ignore_extensions = .pyc, .pyo, .swp, .bak, ~, .rpm, .md, .txt, ~, .orig, .ini, .cfg, .retry</span>

<span class="token comment"># ignore files matching these patterns when parsing a directory as inventory source</span>
<span class="token comment">#ignore_patterns=</span>

<span class="token comment"># If &#39;true&#39; unparsed inventory sources become fatal errors, they are warnings otherwise.</span>
<span class="token comment">#unparsed_is_failed=False</span>

[privilege_escalation]
<span class="token comment">#become=True</span>
<span class="token comment">#become_method=sudo</span>
<span class="token comment">#become_user=root</span>
<span class="token comment">#become_ask_pass=False</span>

[paramiko_connection]

<span class="token comment"># uncomment this line to cause the paramiko connection plugin to not record new host</span>
<span class="token comment"># keys encountered.  Increases performance on new host additions.  Setting works independently of the</span>
<span class="token comment"># host key checking setting above.</span>
<span class="token comment">#record_host_keys=False</span>

<span class="token comment"># by default, Ansible requests a pseudo-terminal for commands executed under sudo. Uncomment this</span>
<span class="token comment"># line to disable this behaviour.</span>
<span class="token comment">#pty=False</span>

<span class="token comment"># paramiko will default to looking for SSH keys initially when trying to</span>
<span class="token comment"># authenticate to remote devices.  This is a problem for some network devices</span>
<span class="token comment"># that close the connection after a key failure.  Uncomment this line to</span>
<span class="token comment"># disable the Paramiko look for keys function</span>
<span class="token comment">#look_for_keys = False</span>

<span class="token comment"># When using persistent connections with Paramiko, the connection runs in a</span>
<span class="token comment"># background process.  If the host doesn&#39;t already have a valid SSH key, by</span>
<span class="token comment"># default Ansible will prompt to add the host key.  This will cause connections</span>
<span class="token comment"># running in background processes to fail.  Uncomment this line to have</span>
<span class="token comment"># Paramiko automatically add host keys.</span>
<span class="token comment">#host_key_auto_add = True</span>

[connection]

<span class="token comment"># ssh arguments to use</span>
<span class="token comment"># Leaving off ControlPersist will result in poor performance, so use</span>
<span class="token comment"># paramiko on older platforms rather than removing it, -C controls compression use</span>
<span class="token comment">#ssh_args = -C -o ControlMaster=auto -o ControlPersist=60s</span>

<span class="token comment"># The base directory for the ControlPath sockets.</span>
<span class="token comment"># This is the &quot;%(directory)s&quot; in the control_path option</span>
<span class="token comment">#</span>
<span class="token comment"># Example:</span>
<span class="token comment"># control_path_dir = /tmp/.ansible/cp</span>
<span class="token comment">#control_path_dir = ~/.ansible/cp</span>

<span class="token comment"># The path to use for the ControlPath sockets. This defaults to a hashed string of the hostname,</span>
<span class="token comment"># port and username (empty string in the config). The hash mitigates a common problem users</span>
<span class="token comment"># found with long hostnames and the conventional %(directory)s/ansible-ssh-%%h-%%p-%%r format.</span>
<span class="token comment"># In those cases, a &quot;too long for Unix domain socket&quot; ssh error would occur.</span>
<span class="token comment">#</span>
<span class="token comment"># Example:</span>
<span class="token comment"># control_path = %(directory)s/%%h-%%r</span>
<span class="token comment">#control_path =</span>

<span class="token comment"># Enabling pipelining reduces the number of SSH operations required to</span>
<span class="token comment"># execute a module on the remote server. This can result in a significant</span>
<span class="token comment"># performance improvement when enabled, however when using &quot;sudo:&quot; you must</span>
<span class="token comment"># first disable &#39;requiretty&#39; in /etc/sudoers</span>
<span class="token comment">#</span>
<span class="token comment"># By default, this option is disabled to preserve compatibility with</span>
<span class="token comment"># sudoers configurations that have requiretty (the default on many distros).</span>
<span class="token comment">#</span>
<span class="token comment">#pipelining = False</span>

<span class="token comment"># Control the mechanism for transferring files (old)</span>
<span class="token comment">#   * smart = try sftp and then try scp [default]</span>
<span class="token comment">#   * True = use scp only</span>
<span class="token comment">#   * False = use sftp only</span>
<span class="token comment">#scp_if_ssh = smart</span>

<span class="token comment"># Control the mechanism for transferring files (new)</span>
<span class="token comment"># If set, this will override the scp_if_ssh option</span>
<span class="token comment">#   * sftp  = use sftp to transfer files</span>
<span class="token comment">#   * scp   = use scp to transfer files</span>
<span class="token comment">#   * piped = use &#39;dd&#39; over SSH to transfer files</span>
<span class="token comment">#   * smart = try sftp, scp, and piped, in that order [default]</span>
<span class="token comment">#transfer_method = smart</span>

<span class="token comment"># if False, sftp will not use batch mode to transfer files. This may cause some</span>
<span class="token comment"># types of file transfer failures impossible to catch however, and should</span>
<span class="token comment"># only be disabled if your sftp version has problems with batch mode</span>
<span class="token comment">#sftp_batch_mode = False</span>

<span class="token comment"># The -tt argument is passed to ssh when pipelining is not enabled because sudo </span>
<span class="token comment"># requires a tty by default. </span>
<span class="token comment">#usetty = True</span>

<span class="token comment"># Number of times to retry an SSH connection to a host, in case of UNREACHABLE.</span>
<span class="token comment"># For each retry attempt, there is an exponential backoff,</span>
<span class="token comment"># so after the first attempt there is 1s wait, then 2s, 4s etc. up to 30s (max).</span>
<span class="token comment">#retries = 3</span>

[persistent_connection]

<span class="token comment"># Configures the persistent connection timeout value in seconds.  This value is</span>
<span class="token comment"># how long the persistent connection will remain idle before it is destroyed.</span>
<span class="token comment"># If the connection doesn&#39;t receive a request before the timeout value</span>
<span class="token comment"># expires, the connection is shutdown. The default value is 30 seconds.</span>
<span class="token comment">#connect_timeout = 30</span>

<span class="token comment"># The command timeout value defines the amount of time to wait for a command</span>
<span class="token comment"># or RPC call before timing out. The value for the command timeout must</span>
<span class="token comment"># be less than the value of the persistent connection idle timeout (connect_timeout)</span>
<span class="token comment"># The default value is 30 second.</span>
<span class="token comment">#command_timeout = 30</span>

[accelerate]
<span class="token comment">#accelerate_port = 5099</span>
<span class="token comment">#accelerate_timeout = 30</span>
<span class="token comment">#accelerate_connect_timeout = 5.0</span>

<span class="token comment"># The daemon timeout is measured in minutes. This time is measured</span>
<span class="token comment"># from the last activity to the accelerate daemon.</span>
<span class="token comment">#accelerate_daemon_timeout = 30</span>

<span class="token comment"># If set to yes, accelerate_multi_key will allow multiple</span>
<span class="token comment"># private keys to be uploaded to it, though each user must</span>
<span class="token comment"># have access to the system via SSH to add a new key. The default</span>
<span class="token comment"># is &quot;no&quot;.</span>
<span class="token comment">#accelerate_multi_key = yes</span>

[selinux]
<span class="token comment"># file systems that require special treatment when dealing with security context</span>
<span class="token comment"># the default behaviour that copies the existing context or uses the user default</span>
<span class="token comment"># needs to be changed to use the file system dependent context.</span>
<span class="token comment">#special_context_filesystems=nfs,vboxsf,fuse,ramfs,9p,vfat</span>

<span class="token comment"># Set this to yes to allow libvirt_lxc connections to work without SELinux.</span>
<span class="token comment">#libvirt_lxc_noseclabel = yes</span>

[colors]
<span class="token comment">#highlight = white</span>
<span class="token comment">#verbose = blue</span>
<span class="token comment">#warn = bright purple</span>
<span class="token comment">#error = red</span>
<span class="token comment">#debug = dark gray</span>
<span class="token comment">#deprecate = purple</span>
<span class="token comment">#skip = cyan</span>
<span class="token comment">#unreachable = red</span>
<span class="token comment">#ok = green</span>
<span class="token comment">#changed = yellow</span>
<span class="token comment">#diff_add = green</span>
<span class="token comment">#diff_remove = red</span>
<span class="token comment">#diff_lines = cyan</span>


[diff]
<span class="token comment"># Always print diff when running ( same as always running with -D/--diff )</span>
<span class="token comment"># always = no</span>

<span class="token comment"># Set how many context lines to show in diff</span>
<span class="token comment"># context = 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认host文件位置：<code>/etc/ansible/hosts</code></p>`,20),t=[l];function o(c,m){return s(),e("div",null,t)}const p=n(i,[["render",o],["__file","1.Ansible安装.html.vue"]]);export{p as default};
