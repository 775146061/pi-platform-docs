import{d as n}from"./app.ead14e12.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="\u5E73\u53F0-api" tabindex="-1"><a class="header-anchor" href="#\u5E73\u53F0-api" aria-hidden="true">#</a> \u5E73\u53F0 API</h1><p>\u5E73\u53F0API\u5141\u8BB8\u4F60\u8BFB\u5199\u6570\u636E\uFF08Pi servers\u4E0E\u4F60\u7684app\u3001\u7528\u6237\u5173\u8054\u7684\u6570\u636E\uFF09</p><h2 id="\u6982\u89C8" tabindex="-1"><a class="header-anchor" href="#\u6982\u89C8" aria-hidden="true">#</a> \u6982\u89C8</h2><h3 id="\u57FA\u7840\u8DEF\u5F84" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u8DEF\u5F84" aria-hidden="true">#</a> \u57FA\u7840\u8DEF\u5F84:</h3><p>\u6700\u65B0\u7684\u5E73\u53F0API\u57FA\u7840\u8DEF\u5F84\u662F<code>api.minepi.com/v2</code></p><blockquote><p><strong>\u6CE8\u610FAPI\u7248\u672C:</strong></p><p>\u5E73\u53F0API\u76EE\u524D\u7684\u7248\u672C\u662Fv2. \u6211\u4EEC\u5C3D\u53EF\u80FD\u4E0D\u5BF9\u4E00\u4E2AAPI\u7684\u7248\u672C\u505A\u7834\u574F\u6027\u6539\u52A8\uFF0C\u53EA\u6709\u505A\u4E86\u7834\u574F\u6027\u6539\u52A8\u624D\u53D1\u5E03\u4E00\u4E2A\u4E3B\u7248\u672C\u3002\u7136\u800C\uFF0C\u5982\u679C\u6709\u5FC5\u8981\u7684\u8BDD\uFF0C\u6211\u4EEC\u53EF\u80FD\u4F1A\u5728\u6CA1\u6709\u901A\u77E5\u7684\u60C5\u51B5\u4E0B(\u4F8B\u5982\uFF1A\u5B89\u5168\u6216\u9690\u79C1\u95EE\u9898\u4FEE\u590D)\u3002</p></blockquote><h3 id="\u8BA4\u8BC1" tabindex="-1"><a class="header-anchor" href="#\u8BA4\u8BC1" aria-hidden="true">#</a> \u8BA4\u8BC1</h3><p>\u5E73\u53F0API\u652F\u6301\u4E24\u79CD\u4E0D\u540C\u7684\u8BA4\u8BC1\u673A\u5236\u3002</p><h4 id="access-token\u8BA4\u8BC1" tabindex="-1"><a class="header-anchor" href="#access-token\u8BA4\u8BC1" aria-hidden="true">#</a> Access token\u8BA4\u8BC1</h4><p>\u6709\u4E9BAPI\u8C03\u7528\u9700\u8981\u4F60\u63D0\u4F9B\u7528\u6237\u7684token\u53BB\u8BBF\u95EE\u8D44\u6E90\u3002\u5B83\u4EEC\u901A\u5E38\u4E0E\u6D89\u53CA\u7528\u6237\u7684\u6570\u636E\uFF08\u4F8B\u5982\uFF1A<code>/me</code>\uFF09\u3002\u53EF\u4EE5\u5728\u8BF7\u6C42headers\u4E2D\u52A0\u4E0A\u4E0B\u9762\u7684header\u53BB\u8BBF\u95EE\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Authorization: Bearer &lt;user access token&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u8FD9\u6837\u4F60\u7684\u540E\u7AEF\u6216\u524D\u7AEF\u5C31\u53EF\u4EE5\u8BBF\u95EE\u670D\u52A1\u4E86\u3002</p><h4 id="\u670D\u52A1api\u5BC6\u94A5\u8BA4\u8BC1" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1api\u5BC6\u94A5\u8BA4\u8BC1" aria-hidden="true">#</a> \u670D\u52A1API\u5BC6\u94A5\u8BA4\u8BC1</h4><p>\u6709\u65F6\u5019\uFF0C\u4E00\u4E9BAPI\u7684\u8C03\u7528\u5FC5\u987B\u7531\u540E\u7AEF\u53D1\u8D77\u3002 \u53EF\u4EE5\u6DFB\u52A0\u4E0B\u9762\u7684header\u53BB\u8BBF\u95EE:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Authorization: Key &lt;your Server API Key&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p><strong>\u6CE8\u610F: \u670D\u52A1API\u5BC6\u94A5\u4EC5\u4EC5\u7528\u4E8E\u540E\u7AEF</strong></p><p>\u4F60\u7684\u670D\u52A1API\u5BC6\u94A5\u5FC5\u987B\u653E\u5728\u670D\u52A1\u7AEF\uFF0C\u7EDD\u5BF9\u4E0D\u80FD\u591F\u53D1\u9001\u5230\u5BA2\u6237\u7AEF\uFF08\u4E0D\u8981\u5728\u5BA2\u6237\u7AEFjavascript\u4EE3\u7801\u4E2D\u4F7F\u7528\uFF09\u3002 \u5728\u672A\u6765\uFF0C\u5728app\u4E2D\u53EF\u80FD\u5BF9\u4F60\u7684\u670D\u52A1API\u5BC6\u94A5\u505A\u654F\u611F\u64CD\u4F5C\uFF0C\u4F46\u662F\u4F60\u7684\u7528\u6237\u4E0D\u80FD\u5141\u8BB8\u53BB\u64CD\u4F5C\u3002\u8BA9\u7528\u6237\u53BB\u8BBF\u95EE\u4F60\u7684\u670D\u52A1API\u5BC6\u94A5\u662F\u4E00\u4E2A<strong>\u4E25\u91CD\u7684\u5B89\u5168\u6F0F\u6D1E</strong>\u3002</p></blockquote><h2 id="api\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#api\u8BF4\u660E" aria-hidden="true">#</a> API\u8BF4\u660E</h2><h3 id="\u8BA4\u8BC1-1" tabindex="-1"><a class="header-anchor" href="#\u8BA4\u8BC1-1" aria-hidden="true">#</a> \u8BA4\u8BC1</h3><h4 id="\u8BBF\u95EE\u7528\u6237\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u8BBF\u95EE\u7528\u6237\u6570\u636E" aria-hidden="true">#</a> \u8BBF\u95EE\u7528\u6237\u6570\u636E:</h4><p>\u83B7\u53D6\u7528\u6237\u6570\u636E\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /me
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>\u8BA4\u8BC1: <strong>Access token</strong></li><li>\u8FD4\u56DE\u7C7B\u578B: <a href="#UserDTO">UserDTO</a></li></ul><p>\u9A8C\u8BC1\u901A\u8FC7\u524D\u7AEFSDK\u83B7\u5F97\u7684\u6570\u636E(\u6076\u610F\u7528\u6237\u53EF\u80FD\u4F1A\u7BE1\u6539\u8BF7\u6C42\u5E76\u4E14\u5C06\u9519\u8BEF\u7684\u6570\u636E\u53D1\u9001\u7ED9\u60A8)\u901A\u8FC7\u5C06\u7528\u6237\u7684\u8BBF\u95EE\u4EE4\u724C\u53D1\u9001\u5230\u540E\u7AEF\uFF0C\u5E76\u4F7F\u7528\u8FD9\u4E2AAPI\u53BB\u9A8C\u8BC1\u4EE4\u724C\u6709\u6548\u6027\u548C\u7528\u6237\u8EAB\u4EFD\u3002Access tokens\u662F\u4E00\u4E2A\u957F\u4E14\u968F\u673A\u7684\u5B57\u7B26\u4E32\uFF0C\u5982\u679Ctoken\u88AB\u7834\u574F\uFF08\u88AB\u7834\u574F\u7684token\u4E0D\u5C5E\u4E8E\u4EFB\u4F55\u7528\u6237\uFF09\u8BF7\u6C42\u5C06\u4F1A\u5931\u8D25\uFF08401 http\u9519\u8BEF\u7801\uFF09</p><h3 id="\u652F\u4ED8" tabindex="-1"><a class="header-anchor" href="#\u652F\u4ED8" aria-hidden="true">#</a> \u652F\u4ED8</h3><p>\u8DEF\u5F84: <code>/payments</code>\u3002</p><h4 id="\u521B\u5EFA\u4E00\u4E2A\u652F\u4ED8" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u4E00\u4E2A\u652F\u4ED8" aria-hidden="true">#</a> \u521B\u5EFA\u4E00\u4E2A\u652F\u4ED8:</h4><p>\u4E0D\u8981\u4F7F\u7528\u5E73\u53F0API\u521B\u5EFA\u652F\u4ED8\u3002\u8BF7\u4F7F\u7528\u5BA2\u6237\u7AEFJavascript SDK\u521B\u5EFA\u652F\u4ED8\u3002</p><h4 id="\u83B7\u53D6\u652F\u4ED8\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u652F\u4ED8\u4FE1\u606F" aria-hidden="true">#</a> \u83B7\u53D6\u652F\u4ED8\u4FE1\u606F:</h4><p>\u83B7\u53D6\u4E00\u4E2A\u652F\u4ED8\u7684\u4FE1\u606F\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /payments/{payment_id}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>\u8BA4\u8BC1\u65B9\u6CD5: <strong>Server API Key</strong></li><li>\u8FD4\u56DE\u7C7B\u578B: <a href="#PaymentDTO">PaymentDTO</a></li></ul><h4 id="\u9A8C\u8BC1\u652F\u4ED8\u5408\u6CD5\u6027" tabindex="-1"><a class="header-anchor" href="#\u9A8C\u8BC1\u652F\u4ED8\u5408\u6CD5\u6027" aria-hidden="true">#</a> \u9A8C\u8BC1\u652F\u4ED8\u5408\u6CD5\u6027:</h4><p>\u670D\u52A1\u7AEF\u5BA1\u6279\uFF1A\u6807\u8BB0\u4E00\u4E2A\u652F\u4ED8\u662F\u88AB\u5BA1\u6279\u7684\uFF0C\u4F7F\u7528\u6237\u53EF\u4EE5\u63D0\u4EA4\u4E8B\u52A1\u5230\u533A\u5757\u94FE\u4E0A\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>POST /payments/{payment_id}/approve
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>\u8BA4\u8BC1\u65B9\u6CD5: <strong>Server API Key</strong></li><li>\u8FD4\u56DE\u7C7B\u578B: <a href="#PaymentDTO">PaymentDTO</a></li></ul><h4 id="\u5B8C\u6210\u652F\u4ED8" tabindex="-1"><a class="header-anchor" href="#\u5B8C\u6210\u652F\u4ED8" aria-hidden="true">#</a> \u5B8C\u6210\u652F\u4ED8:</h4><p>\u670D\u52A1\u7AEF\u5B8C\u6210\uFF1A\u901A\u8FC7\u5411Pi Servers\u8BC1\u660E\u53D6\u5F97\u7684txid\u662F\u5408\u6CD5\u7684\uFF0C\u4ECE\u800C\u6807\u8BB0\u8FD9\u4E2A\u652F\u4ED8\u4E3A\u5B8C\u6210\uFF0C\u4F7F\u7528\u6237\u53EF\u4EE5\u5173\u95ED\u652F\u4ED8\u6D41\u7A0B\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>POST /payments/{payment_id}/complete
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>\u8BA4\u8BC1\u65B9\u6CD5: <strong>Server API Key</strong></li><li>\u8FD4\u56DE\u7C7B\u578B: <a href="#PaymentDTO">PaymentDTO</a></li></ul><p>\u8BF7\u6C42\u4F53\u6837\u4F8B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;txid&quot;: &quot;7a7ed20d3d72c365b9019baf8dc4c4e3cce4c08114d866e47ae157e3a796e9e7&quot;
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u6570\u636E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a> \u6570\u636E\u7C7B\u578B</h2><h3 id="userdto" tabindex="-1"><a class="header-anchor" href="#userdto" aria-hidden="true">#</a> <code>UserDTO</code></h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;uid&quot;</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token comment">// An app-specific user identifier</span>
  <span class="token string-property property">&quot;username&quot;</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token comment">// The user&#39;s Pi username. Requires the \`username\` scope.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="paymentdto" tabindex="-1"><a class="header-anchor" href="#paymentdto" aria-hidden="true">#</a> <code>PaymentDTO</code></h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token punctuation">{</span>
  <span class="token comment">// Payment data:</span>
  <span class="token string-property property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token comment">// The payment identifier</span>
  <span class="token string-property property">&quot;user_uid&quot;</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token comment">// The user&#39;s app-specific ID</span>
  <span class="token string-property property">&quot;amount&quot;</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token comment">// The payment amount</span>
  <span class="token string-property property">&quot;memo&quot;</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token comment">// A string provided by the developer, shown to the user</span>
  <span class="token string-property property">&quot;metadata&quot;</span><span class="token operator">:</span> Object<span class="token punctuation">,</span> <span class="token comment">// An object provided by the developer for their own usage</span>
  <span class="token string-property property">&quot;to_address&quot;</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token comment">// The recipient address of the blockchain transaction</span>
  <span class="token string-property property">&quot;created_at&quot;</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token comment">// The payment&#39;s creation timestamp</span>
  
  <span class="token comment">// Status flags representing the current state of this payment</span>
  <span class="token string-property property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;developer_approved&quot;</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span> <span class="token comment">// Server-Side Approval</span>
    <span class="token string-property property">&quot;transaction_verified&quot;</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span> <span class="token comment">// Blockchain transaction verified</span>
    <span class="token string-property property">&quot;developer_completed&quot;</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span> <span class="token comment">// Server-Side Completion</span>
    <span class="token string-property property">&quot;cancelled&quot;</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span> <span class="token comment">// Cancelled by the developer or by Pi Network</span>
    <span class="token string-property property">&quot;user_cancelled&quot;</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span> <span class="token comment">// Cancelled by the user</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  
  <span class="token comment">// Blockchain transaction data:</span>
  <span class="token string-property property">&quot;transaction&quot;</span><span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">|</span> <span class="token punctuation">{</span> <span class="token comment">// This is null if no transaction has been made yet</span>
    <span class="token string-property property">&quot;txid&quot;</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token comment">// The id of the blockchain transaction</span>
    <span class="token string-property property">&quot;verified&quot;</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span> <span class="token comment">// True if the transaction matches the payment, false otherwise</span>
    <span class="token string-property property">&quot;_link&quot;</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token comment">// A link to the operation on the Blockchain API</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div>`,46);function t(p,r){return e}var i=s(a,[["render",t]]);export{i as default};
