import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as t,f as s,a as e,e as l,b as d}from"./app-ef0b4d9d.js";const a="/assets/100-1663234264109-121-2b7aff2f.jpeg",r={},v=e("hr",null,null,-1),u=e("p",null,[e("img",{src:a,alt:"",loading:"lazy"})],-1),m=e("h1",{id:"迭代器模式定义",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#迭代器模式定义","aria-hidden":"true"},"#"),l(" 迭代器模式定义")],-1),c=e("p",null,"迭代器模式定义：提供一种方法顺序访问一个聚合对象中的各个对象。",-1),b=d(`<h2 id="迭代模式使用场景" tabindex="-1"><a class="header-anchor" href="#迭代模式使用场景" aria-hidden="true">#</a> 迭代模式使用场景</h2><p>(1)访问一个聚合对象的内容而无需暴露它的内部表示<br> (2)支持对聚合对象的多种遍历<br> (3)为遍历不同的聚合结构提供一个统一的接口</p><h2 id="实际案例分析" tabindex="-1"><a class="header-anchor" href="#实际案例分析" aria-hidden="true">#</a> 实际案例分析</h2><p>有一个蛋糕店和一个餐厅要进行合并，这也意味着要将要将这两个店铺的菜单进行合并展示，如何从原有项目进行合并？从代码实现的角度要怎么设计？本文将从传统设计和迭代器模式两个角度进行说明。</p><ol><li>传统模式设计<br> 传统设计的思路是将蛋糕店类和餐厅类分别提供返回自身菜单数据集合的方法，然后在其服务员类获取菜单集合遍历展示显示，实现代码如下：</li></ol><p>蛋糕店菜单类:通过List保存菜单，并提供了getMenuItems方法返回集合数据，暴露了其数据结构。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class CakeHouseMenu {
	private ArrayList&lt;MenuItem&gt; menuItems;

	public CakeHouseMenu() {
		menuItems = new ArrayList&lt;MenuItem&gt;();
		
		addItem(&quot;KFC Cake Breakfast&quot;,&quot;boiled eggs&amp;toast&amp;cabbage&quot;,true,3.99f);
		addItem(&quot;MDL Cake Breakfast&quot;,&quot;fried eggs&amp;toast&quot;,false,3.59f);
		addItem(&quot;Stawberry Cake&quot;,&quot;fresh stawberry&quot;,true,3.29f);
		addItem(&quot;Regular Cake Breakfast&quot;,&quot;toast&amp;sausage&quot;,true,2.59f);
	}

	private void addItem(String name, String description, boolean vegetable,
			float price) {
		MenuItem menuItem = new MenuItem(name, description, vegetable, price);
		menuItems.add(menuItem);
	}
	public ArrayList&lt;MenuItem&gt; getMenuItems() {
		return menuItems;
	}
	
	//其他功能代码
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>菜单实体类：包含菜品最基本的名称、描述信息。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class MenuItem {
	private String name,description;
	private boolean vegetable;
	private float price;
	public MenuItem(String name,String description,boolean vegetable,float price)
	{
		this.name=name;
		this.description=description;
		this.vegetable=vegetable;
		this.price=price;
		
	}
	public String getName()
	{
		return name;
	}
	public String getDescription()
	{
		return description;
	}
	public float getPrice()
	{
		return price;
	}
	public boolean  isVegetable()
	{
		return vegetable;
	}
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>餐厅类实现如下：餐厅菜单数据是用数组形式保存，同时也提供了方法返回数据。</p><pre><code>public DinerMenu()
{
	menuItems=new MenuItem[Max_Items] ;
	addItem(&quot;vegetable Blt&quot;,&quot;bacon&amp;lettuce&amp;tomato&amp;cabbage&quot;,true,3.58f);
	addItem(&quot;Blt&quot;,&quot;bacon&amp;lettuce&amp;tomato&quot;,false,3.00f);
	addItem(&quot;bean soup&quot;,&quot;bean&amp;potato salad&quot;,true,3.28f);
	addItem(&quot;hotdog&quot;,&quot;onions&amp;cheese&amp;bread&quot;,false,3.05f);
</code></pre><p>​ <br> ​ }<br> ​ private void addItem(String name, String description, boolean vegetable,<br> ​ float price) {<br> ​ MenuItem menuItem = new MenuItem(name, description, vegetable, price);<br> ​ if(numberOfItems&gt;=Max_Items)<br> ​ {<br> ​ System.err.println(&quot;sorry,menu is full!can not add another item&quot;);<br> ​ }else{<br> ​ menuItems[numberOfItems]=menuItem;<br> ​ numberOfItems++;<br> ​ }<br> ​ <br> ​ }<br> ​ <br> ​ public MenuItem[] getMenuItems() {<br> ​ return menuItems;<br> ​ }<br> ​ }</p><p>服务员展示菜单类：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
public class Waitress {
	private CakeHouseMenu mCakeHouseMenu;
	private DinerMenu mDinerMenu;
	private ArrayList&lt;MenuItem&gt; cakeitems;
	private MenuItem[] dineritems;

	public Waitress() {
		mCakeHouseMenu = new CakeHouseMenu();
		cakeitems = mCakeHouseMenu.getMenuItems();

		mDinerMenu = new DinerMenu();
		dineritems = mDinerMenu.getMenuItems();
	}

	public void printMenu() {
		MenuItem menuItem;
		for (int i = 0, len = cakeitems.size(); i &lt; len; i++) {
			menuItem = cakeitems.get(i);
			System.out.println(menuItem.getName() + &quot;***&quot;
					+menuItem.getPrice()+&quot;***&quot;+ menuItem.getDescription());

		}
		for (int i = 0, len = mDinerMenu.numberOfItems; i &lt; len; i++) {
			menuItem = dineritems[i];
			System.out.println(menuItem.getName() + &quot;***&quot;
					+menuItem.getPrice()+&quot;***&quot;+ menuItem.getDescription());

		}

	}

	public void printBreakfastMenu() {

	}

	public void printLunchMenu() {

	}

	public void printVegetableMenu() {

	}
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务员通过调用蛋糕店和餐厅返回的集合数据然后进行接收遍历展示。从传统设计的简单代码实现来看，这种设计有几个缺点。<br> （1） 扩展性较差。假如我需要新合并一个零食店，新增一个零食类提供暴露数据方法的同时，还要在服务员新增list去接收订单项并循环输出，从扩展性的设计角度上来说，一个类的修改是关闭的，扩展是开放的，即一个类的新增不会引起另一个类修改。另外，开发应该是针对于接口进行开发，而不是实现类</p><p>（2）蛋糕和餐厅的数据结构都是暴露的，在服务员类需要关注返回的数据结构，提高了类之间的耦合性，同时也会带来隐藏的安全问题。</p><ol start="2"><li>迭代器模式设计</li></ol><p>首先我们设计一个迭代器接口，接口有两个方法，hasNext判断是否有下一条数据，next方法返回数据</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public interface Iterator {
	
	public boolean hasNext();
	public Object next();
	

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在餐厅和蛋糕店菜单项内植入了迭代器接口的实现类。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class DinerMenu {
	private final static int Max_Items = 5;
	private int numberOfItems = 0;
	private MenuItem[] menuItems;

	public DinerMenu() {
		menuItems = new MenuItem[Max_Items];
		addItem(&quot;vegetable Blt&quot;, &quot;bacon&amp;lettuce&amp;tomato&amp;cabbage&quot;, true, 3.58f);
		addItem(&quot;Blt&quot;, &quot;bacon&amp;lettuce&amp;tomato&quot;, false, 3.00f);
		addItem(&quot;bean soup&quot;, &quot;bean&amp;potato salad&quot;, true, 3.28f);
		addItem(&quot;hotdog&quot;, &quot;onions&amp;cheese&amp;bread&quot;, false, 3.05f);

	}

	private void addItem(String name, String description, boolean vegetable,
			float price) {
		MenuItem menuItem = new MenuItem(name, description, vegetable, price);
		if (numberOfItems &gt;= Max_Items) {
			System.err.println(&quot;sorry,menu is full!can not add another item&quot;);
		} else {
			menuItems[numberOfItems] = menuItem;
			numberOfItems++;
		}

	}

	public Iterator getIterator() {
		return new DinerIterator();
	}

	class DinerIterator implements Iterator {
		private int position;

		public DinerIterator() {
			position = 0;
		}

		@Override
		public boolean hasNext() {
			// TODO Auto-generated method stub
			if (position &lt; numberOfItems) {
				return true;
			}
			
			return false;
		}

		@Override
		public Object next() {
			// TODO Auto-generated method stub
			MenuItem menuItem = menuItems[position];
			position++;
			return menuItem;
		}
	};
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过实现迭代器接口，返回的是迭代器对象，没有将数据结构暴露出去。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class CakeHouseMenu {
	private ArrayList&lt;MenuItem&gt; menuItems;
	
	
	public CakeHouseMenu() {
		menuItems = new ArrayList&lt;MenuItem&gt;();
		
		addItem(&quot;KFC Cake Breakfast&quot;,&quot;boiled eggs&amp;toast&amp;cabbage&quot;,true,3.99f);
		addItem(&quot;MDL Cake Breakfast&quot;,&quot;fried eggs&amp;toast&quot;,false,3.59f);
		addItem(&quot;Stawberry Cake&quot;,&quot;fresh stawberry&quot;,true,3.29f);
		addItem(&quot;Regular Cake Breakfast&quot;,&quot;toast&amp;sausage&quot;,true,2.59f);
	}

	private void addItem(String name, String description, boolean vegetable,
			float price) {
		MenuItem menuItem = new MenuItem(name, description, vegetable, price);
		menuItems.add(menuItem);
	}
	

	
	public Iterator getIterator()
	{
		return new CakeHouseIterator() ;
	}
	
	class CakeHouseIterator implements  Iterator
	 {		
		private int position=0;
		public CakeHouseIterator()
		{
			  position=0;
		}
		
		 	@Override
			public boolean hasNext() {
			// TODO Auto-generated method stub
			if(position&lt;menuItems.size())
			{
				return true;
			}
			
			return false;
		}

		@Override
		public Object next() {
			// TODO Auto-generated method stub
			MenuItem menuItem =menuItems.get(position);
			position++;
			return menuItem;
		}};
	//其他功能代码
	
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务员类通过获取迭代器对象遍历菜单项展示</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Waitress {
	private ArrayList&lt;Iterator&gt; iterators=new ArrayList&lt;Iterator&gt;();


	public Waitress() {
		
	}
	public void addIterator(Iterator iterator)
	{
		iterators.add(iterator);
		
	}
	public void printMenu() {
		Iterator iterator;
		MenuItem menuItem;
		for (int i = 0, len = iterators.size(); i &lt; len; i++) {
			iterator = iterators.get(i);
			
			while(iterator.hasNext())
			{
				menuItem=(MenuItem)	iterator.next();
				System.out.println(menuItem.getName() + &quot;***&quot;
						+menuItem.getPrice()+&quot;***&quot;+ menuItem.getDescription());

			}
			
			
		}
		
		

	}

	public void printBreakfastMenu() {

	}

	public void printLunchMenu() {

	}

	public void printVegetableMenu() {

	}
}
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相对于传统设计，迭代器设计模式的优点如下：</p><ol><li>避免了数据结构的暴露，降低耦合性</li><li>可扩展性和可维护性好</li></ol><h2 id="迭代器模式的缺点" tabindex="-1"><a class="header-anchor" href="#迭代器模式的缺点" aria-hidden="true">#</a> 迭代器模式的缺点</h2><pre><code>类的个数成对增加，在本例中新增了两个内部类去实现。
</code></pre>`,29);function o(p,I){return i(),t("div",null,[v,u,m,c,s("more"),b])}const f=n(r,[["render",o],["__file","2.迭代器模式.html.vue"]]);export{f as default};
